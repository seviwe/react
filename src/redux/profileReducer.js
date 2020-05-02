const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hello World!', countLike: 20, countDislike: 6 },
        { id: 2, message: 'It\'s my first post.', countLike: 123, countDislike: 56 },
        { id: 3, message: 'Test meesage', countLike: 500, countDislike: 0 },
        { id: 4, message: 'Test meesage 2', countLike: 0, countDislike: 0 },
    ],
    newPostText: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            //глубокое копирование объекта
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 5, message: state.newPostText, countLike: 0, countDislike: 0 }]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            //поверхностное копирование объекта
            return {
                ...state,
                newPostText: action.text
            };
        }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST })

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}

export default profileReducer;