import { usersAPI } from './../api/api';
import { updObjInArrFollowUnfollow } from '../utils/validators/helpers/objectsHelpers';

const FOLLOW = 'antiVK/users/FOLLOW';
const UNFOLLOW = 'antiVK/users/UNFOLLOW';
const SET_USERS = 'antiVK/users/SET_USERS';
const SET_CURR_PAGE = 'antiVK/users/SET_CURR_PAGE';
const SET_TOTAL_USERS_COUNT = 'antiVK/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'antiVK/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'antiVK/users/TOGGLE_IS_FOLLOWING_PROGRESS';

//список пользователей соц сети и вся инфа о них. Берется из сервера
let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                //было
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u;
                // })
                users: updObjInArrFollowUnfollow(state.users, action.userId, "id", { followed: true })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updObjInArrFollowUnfollow(state.users, action.userId, "id", { followed: false })
            };
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURR_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

//actionCreators
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURR_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

//thunk делает кучу асинхронных запросов и диспатч
export const getUsers = (currentPage, pageSize) => { //thunk-creator
    return async (dispatch) => { //thunk
        dispatch(toggleIsFetching(true)); //отображение крутилки загрузки
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false)); //отключить крутилку загрузки
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

//функция для thunk-creator'a follow and unfollow
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowInProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) dispatch(actionCreator(userId));
    dispatch(toggleIsFollowInProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(userId), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(userId), unfollowSuccess);
    }
}

export default usersReducer;