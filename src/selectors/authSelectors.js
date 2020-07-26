import { createSelector } from "reselect";

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getUserId = (state) => {
    return state.auth.userId;
}

export const getLogin = (state) => {
    return state.auth.login;
}