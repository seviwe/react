import { authAPI } from './../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';

//список пользователей соц сети и вся инфа о них. Берется из сервера
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    //isFetching: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        // case TOGGLE_IS_FETCHING: {
        //     return { ...state, isFetching: action.isFetching }
        // }
        default:
            return state;
    }
}

//actionCreators
export const setAuthUserData = (userId, email, login) => ({ type: SET_USERS_DATA, data: { userId, email, login } });
//export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
//react-thunk
export const getAuthUserData = () => (dispatch) => {
    authAPI.getMe().then(response => {
        if (response.data.resultCode === 0) { //если залогинены
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;