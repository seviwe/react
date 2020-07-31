import { createSelector } from "reselect";

export const getProfile = (state) => {
    return state.profilePage.profile;
}

export const getAvatar = (state) => {
    if (state.profilePage.profile) return state.profilePage.profile.photos.small;
}

export const getStatus = (state) => {
    return state.profilePage.status;
}

export const getPosts = (state) => {
    return state.profilePage.posts;
}