//import { createSelector } from "reselect";

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getCaptchaUrl = (state) => {
    if (state.auth) return state.auth.captchaUrl;
}

export const getUserId = (state) => {
    return state.auth.userId;
}

export const getLogin = (state) => {
    return state.auth.login;
}

export const getPhoto = (state) => {
    return state.auth.photo;
}