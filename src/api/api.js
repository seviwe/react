import * as axios from 'axios';

//Data Access Layer

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/",
    headers: {
        "API-KEY": "b19640f8-e1c6-4c7e-b9f4-4fc65e7a380e"
    }
});

export const usersAPI = {
    //функция запроса с сервера пользователей, где страница = 1, currentPage указывается в usersReducer
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get("1.0/users?page=" + currentPage + "&count=" + pageSize)
            .then(response => {
                return response.data;
            });
    },
    //функция отписки onfollow
    unfollowUser(idUser) {
        return instance.delete("1.0/follow/" + idUser)
            .then(response => {
                return response.data;
            });
    },
    //функция подписки follow
    followUser(idUser) {
        return instance.post("1.0/follow/" + idUser)
            .then(response => {
                return response.data;
            });
    },
};

export const profileAPI = {
    //функция запроса с сервера профиля пользователя
    getProfileUser(idUser) {
        return instance.get("1.0/profile/" + idUser)
            .then(response => {
                return response.data;
            });
    },
};