import avatarImage from './imgReducer';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Дмитрий', imgSrc: avatarImage.getAvatarImage(0) },
        { id: 2, name: 'Светлана', imgSrc: avatarImage.getAvatarImage(1) },
        { id: 3, name: 'Женя', imgSrc: avatarImage.getAvatarImage(3) },
        { id: 4, name: 'Андрей', imgSrc: avatarImage.getAvatarImage(4) },
        { id: 5, name: 'Александр', imgSrc: avatarImage.getAvatarImage(2) },
        { id: 6, name: 'Мария', imgSrc: avatarImage.getAvatarImage(1) },
    ],
    messages: [
        { id: 1, message: 'Привет!' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Чем занимаешься?' },
    ],
    newMessageText: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            //глубокое копирование объекта
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: state.newMessageText }]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            //поверхностное копирование объекта
            return {
                ...state,
                newMessageText: action.text
            };
        }
        default:
            return state;
    }
}

export const addMessage = () => ({ type: ADD_MESSAGE })

export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text,
    }
}

export default dialogsReducer;