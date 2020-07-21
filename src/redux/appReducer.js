import { getAuthUserData } from './authReducer';

const SET_INIT = 'SET_INIT';

let initialState = {
    init: false,
    isAuth: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT: {
            return {
                ...state,
                init: true,
            };
        }
        default:
            return state;
    }
}

export const initSuccess = () => ({ type: SET_INIT });

//react-thunk
export const initApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initSuccess());
        });
}

export default appReducer;