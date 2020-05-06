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

export default authReducer;