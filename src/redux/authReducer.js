import { authAPI, securityAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const SET_USERS_DATA = 'antiVK/auth/SET_USERS_DATA';
const GET_PHOTO = 'antiVK/auth/GET_PHOTO';
const GET_CAPTCHA_URL = 'antiVK/auth/GET_CAPTCHA_URL';

//список пользователей соц сети и вся инфа о них. Берется из сервера
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    captchaUrl: null,
    //rememberMe: false,
    //isFetching: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
        case GET_CAPTCHA_URL:
        case GET_PHOTO:
            return {
                ...state,
                ...action.payload,
            };
        // case TOGGLE_IS_FETCHING: {
        //     return { ...state, isFetching: action.isFetching }
        // }
        default:
            return state;
    }
}

//actionCreators
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USERS_DATA, payload: { userId, email, login, isAuth } });
export const getPhotoSuccess = (photo) => ({ type: GET_PHOTO, payload: { photo } });
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL, payload: { captchaUrl } });
//export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

//react-thunk
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.getMe();
    if (response.data.resultCode === 0) { //если залогинены
        let { id, email, login } = response.data.data;
        const responsePhoto = await authAPI.getPhotoAuthUser(id);
        dispatch(getPhotoSuccess(responsePhoto));
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const authUser = (email, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) { //если нет ошибок
        dispatch(getAuthUserData()); //запрос логина с сервера
    } else {
        if (data.resultCode === 10) { //если нет ошибок
            dispatch(getCaptchaUrl()); //запрос логина с сервера
        }
        const error_message = data.messages.length > 0 ? data.messages[0] : "Произошла неведомая ошибка";
        dispatch(stopSubmit("login", { _error: error_message })); //параметры: название формы, название ошибки
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl)); //запрос каптчи с сервера
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) { //если нет ошибок
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;