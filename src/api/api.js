import * as axios from 'axios';
//Data Access Layer

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b19640f8-e1c6-4c7e-b9f4-4fc65e7a380e"
    }
});

export const usersAPI = {
    //функция запроса с сервера пользователей, где страница = 1, currentPage указывается в usersReducer
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get("users?page=" + currentPage + "&count=" + pageSize)
            .then(response => {
                return response.data;
            });
    },
    //функция отписки onfollow
    unfollowUser(idUser) {
        return instance.delete("follow/" + idUser)
            .then(response => {
                return response.data;
            });
    },
    //функция подписки follow
    followUser(idUser) {
        return instance.post("follow/" + idUser)
            .then(response => {
                return response.data;
            });
    },
};

export const profileAPI = {
    //функция запроса с сервера профиля пользователя
    getProfileUser(idUser) {
        return instance.get("profile/" + idUser)
            .then(response => {
                return response.data;
            });
    },
    //функция запроса с сервера статуса пользователя
    getStatusUser(idUser) {
        return instance.get("profile/status/" + idUser)
            .then(response => {
                return response.data;
            });
    },
    //функция обновления статуса пользователя
    updateStatusUser(status) {
        return instance.put("profile/status", { status: status });
    },
    //функция обновления статуса пользователя
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put("profile/photo", formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    //функция обновления профиля пользователя
    saveProfile(profile) {
        return instance.put("profile", profile);
    },
};

export const authAPI = {
    //функция запроса логина с сервера
    getMe() {
        return instance.get("auth/me");
    },
    //функция авторизации пользователя
    login(email, password, rememberMe = false) {
        return instance.post("auth/login", { email, password, rememberMe })
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return instance.delete("auth/login");
    },
};