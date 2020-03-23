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
}

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello World!', countLike: 20, countDislike: 6 },
                { id: 2, message: 'It\'s my first post.', countLike: 123, countDislike: 56 },
                { id: 3, message: 'Test meesage', countLike: 500, countDislike: 0 },
                { id: 4, message: 'Test meesage 2', countLike: 0, countDislike: 0 },
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        friendsPage: {
            friends: [
                { id: 1, imgSrc: avatarImage.getAvatarImage(0), name: 'Михаил', surname: 'Павлов' },
                { id: 2, imgSrc: avatarImage.getAvatarImage(3), name: 'Дмитрий', surname: 'Иванов' },
                { id: 3, imgSrc: avatarImage.getAvatarImage(1), name: 'Светлана', surname: 'Ясная' },
                { id: 4, imgSrc: avatarImage.getAvatarImage(1), name: 'Елена', surname: 'Гребникова' },
                { id: 5, imgSrc: avatarImage.getAvatarImage(2), name: 'Женя', surname: 'Казанский' },
                { id: 6, imgSrc: avatarImage.getAvatarImage(4), name: 'Кирилл', surname: 'Эльман' },
            ]
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() { },
    //функция добавления поста на стену
    addPost() {
        let newPost = { id: 5, message: this._state.profilePage.newPostText, countLike: 0, countDislike: 0 };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    //функция обновления текста в textarea
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    //функция добавления поста на стену
    addMessage() {
        let newMessage = { id: 4, message: this._state.dialogsPage.newMessageText };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    //функция обновления текста в textarea
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    //наблюдатель
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

//console.log(store);

export default store;