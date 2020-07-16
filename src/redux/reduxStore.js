import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { friendsReducer } from "./friendsReducer";
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;