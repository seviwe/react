import avatarImage from './imgReducer';

const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            //глубокое копирование объекта
            return {
                ...state,
                messages: [...state.messages, { id: (state.messages.length) + 1, message: action.newMessageBody }]
            };
        }
        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;