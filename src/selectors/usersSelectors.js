import { createSelector } from "reselect";

//примитивный селектор, из них можно создавать более навороченные селекторы
const getUsers = (state) => {
    return state.usersPage.users;
}

//исп библиотеки reselect 
//параметры: 1-примитивный селектор, 2-конечное значение (зависимость)
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true); //заглушка в качетсве примера
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}