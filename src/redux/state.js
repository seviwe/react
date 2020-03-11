let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello World!', countLike: 20, countDislike: 6 },
            { id: 2, message: 'It\'s my first post.', countLike: 123, countDislike: 56 },
            { id: 3, message: 'Test meesage', countLike: 500, countDislike: 0 },
            { id: 4, message: 'Test meesage 2', countLike: 0, countDislike: 0 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Дмитрий' },
            { id: 2, name: 'Светлана' },
            { id: 3, name: 'Женя' },
            { id: 4, name: 'Андрей' },
            { id: 5, name: 'Александр' },
            { id: 6, name: 'Мария' }
        ],
        messages: [
            { id: 1, message: 'Привет!' },
            { id: 2, message: 'Как дела?' },
            { id: 3, message: 'Чем занимаешься?' },
        ]
    }
}

export default state;