const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let avatarImage = {
    _image: {
        img: [
            { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF' },
            { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY8JBBDJ15r08pjcZ81aWOEgFGPKLV-yXEz_9LxMk7Dn_-SYOg' },
            { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPg3XBAD7Y_OBK42lSSsE6EmstHQFwDhos9-_U7qalNs8azhSk' },
            { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKs6g39CeptLQsVJ2m_w7Ib6RsPCuJuUsUsMq9aafQGVB9hhsg' },
            { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV' },
        ]
    },
    getAvatarImage(value) {
        return this._image.img[value].src;
    },
};

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
            let newMessage = { id: 4, message: state.newMessageText };
            //глубокое копирование объекта
            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            //поверхностное копирование объекта
            let stateCopy = { ...state };
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text,
    }
}

export default dialogsReducer;