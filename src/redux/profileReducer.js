import { profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'antiVK/profile/ADD-POST';
const SET_USER_PROFILE = 'antiVK/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'antiVK/profile/SET_USER_STATUS';
const SET_LIKE_POST = 'antiVK/profile/SET_LIKE_POST';
const SET_DISLIKE_POST = 'antiVK/profile/SET_DISLIKE_POST';
const UNSET_LIKE_POST = 'antiVK/profile/UNSET_LIKE_POST';
const UNSET_DISLIKE_POST = 'antiVK/profile/UNSET_DISLIKE_POST';
const DEL_POST = 'antiVK/profile/DEL_POST';
const SET_USER_PHOTO_AVATAR = 'antiVK/profile/SET_USER_PHOTO_AVATAR';

let initialState = {
    posts: [
        { id: 1, message: 'Hello World!', countLike: 20, countDislike: 6, userId: 7836, setLike: false, setDislike: false },
        { id: 2, message: 'It\'s my first post.', countLike: 12, countDislike: 56, userId: 7836, setLike: false, setDislike: false },
        { id: 3, message: 'Test message', countLike: 50, countDislike: 0, userId: 7836, setLike: false, setDislike: false },
        { id: 4, message: 'Test message 2', countLike: 0, countDislike: 1, userId: 7836, setLike: false, setDislike: false },
    ],
    profile: null,
    status: null,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            //глубокое копирование объекта
            return {
                ...state,
                posts: [...state.posts, { id: (state.posts.length) + 1, message: action.newPostBody, countLike: 0, countDislike: 0, userId: 7836, setLike: false, setDislike: false }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_LIKE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => {
                    if (p.id === action.postId && !p.setLike) {
                        p.countLike++;
                        p.setLike = true; //можно только раз поставить лайк
                        return { ...p }
                    }
                    return state.posts;
                })
            };
        }
        case SET_DISLIKE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => {
                    if (p.id === action.postId && !p.setDislike) {
                        p.countDislike++;
                        p.setDislike = true; //можно только раз поставить дизлайк
                        return { ...p }
                    }
                    return state.posts;
                })
            };
        }
        case UNSET_LIKE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => {
                    if (p.id === action.postId && p.setLike) {
                        p.countLike--;
                        p.setLike = false; //можно только раз снять лайк
                        return { ...p }
                    }
                    return state.posts;
                })
            };
        }
        case UNSET_DISLIKE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => {
                    if (p.id === action.postId && p.setDislike) {
                        p.countDislike--;
                        p.setDislike = false; //можно только раз снять дизлайк
                        return { ...p }
                    }
                    return state.posts;
                })
            };
        }
        case DEL_POST: {
            //глубокое копирование объекта
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case SET_USER_PHOTO_AVATAR: {
            //добавление аватарки профиля
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        }
        default:
            return state;
    }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody })
export const deletePost = (postId) => ({ type: DEL_POST, postId })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setAvatarPhotoSuccess = (photos) => ({ type: SET_USER_PHOTO_AVATAR, photos })

export const setLikePost = (postId) => ({ type: SET_LIKE_POST, postId })
export const setDislikePost = (postId) => ({ type: SET_DISLIKE_POST, postId })

export const unsetLikePost = (postId) => ({ type: UNSET_LIKE_POST, postId })
export const unsetDislikePost = (postId) => ({ type: UNSET_DISLIKE_POST, postId })


export const getUserProfile = (userId) => async (dispatch) => {
    //запрос с сервера профиля пользователя
    const data = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    //запрос с сервера статуса пользователя
    const data = await profileAPI.getStatusUser(userId)
    dispatch(setUserStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    //обновления статуса пользователя
    try {
        const response = await profileAPI.updateStatusUser(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (error) {
        //обработка ошибки
    }
}

export const savePhoto = (file) => async (dispatch) => {
    //обновления статуса пользователя
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setAvatarPhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    //обновления профиля пользователя
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId)); //обновление профиля, после выполнения запроса
    } else {
        dispatch(stopSubmit("updateContact", { _error: response.data.messages[0] })); //параметры: название формы, название ошибки
    }
}

export default profileReducer;