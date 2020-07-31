import { authAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const SET_USERS_DATA = 'antiVK/auth/SET_USERS_DATA';
//const AUTH_USER = 'AUTH_USER';

//список пользователей соц сети и вся инфа о них. Берется из сервера
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    //password: null,
    //rememberMe: false,
    //isFetching: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return {
                ...state,
                ...action.payload,
                //isAuth: true
            };
        }

        // case AUTH_USER: {
        //     return {
        //         ...state,
        //         ...action.data,
        //         isAuth: true,
        //         //login: action.login,
        //         //password: action.password
        //     };
        // }
        // case TOGGLE_IS_FETCHING: {
        //     return { ...state, isFetching: action.isFetching }
        // }
        default:
            return state;
    }
}

//actionCreators
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USERS_DATA, payload: { userId, email, login, isAuth } });
//export const setAuthUser = (email, password, rememberMe) => ({ type: AUTH_USER, data: { email, password, rememberMe } });
//export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

//react-thunk
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.getMe();

    if (response.data.resultCode === 0) { //если залогинены
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const authUser = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) { //если нет ошибок
        dispatch(getAuthUserData()); //запрос логина с сервера
    } else {
        const error_message = data.messages.length > 0 ? data.messages[0] : "Произошла неведомая ошибка";
        dispatch(stopSubmit("login", { _error: error_message })); //параметры: название формы, название ошибки
    }
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) { //если нет ошибок
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;