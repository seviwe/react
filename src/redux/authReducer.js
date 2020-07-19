import { authAPI } from './../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';
const AUTH_USER = 'AUTH_USER';

//список пользователей соц сети и вся инфа о них. Берется из сервера
let initialState = {
    userId: null,
    email: null,
    login: null,
    password: null,
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
        case AUTH_USER: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
                login: action.login,
                password: action.password
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
export const setAuthUser = (email, password) => ({ type: AUTH_USER, data: { email, password } });
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

export const authUser = (email, password) => (dispatch) => {
    authAPI.authorizationUser(email, password).then(data => {
        if (data.resultCode === 0) { //если нет ошибок
            let { email, password } = data.data;
            dispatch(setAuthUser(email, password));
        }
    });
}

export default authReducer;