let avatarImage = {
    imgs: [
        { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF' },
        { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY8JBBDJ15r08pjcZ81aWOEgFGPKLV-yXEz_9LxMk7Dn_-SYOg' },
        { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPg3XBAD7Y_OBK42lSSsE6EmstHQFwDhos9-_U7qalNs8azhSk' },
        { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKs6g39CeptLQsVJ2m_w7Ib6RsPCuJuUsUsMq9aafQGVB9hhsg' },
        { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV' },
    ]
}

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
            { id: 1, name: 'Дмитрий', imgSrc: avatarImage.imgs[0].src },
            { id: 2, name: 'Светлана', imgSrc: avatarImage.imgs[1].src },
            { id: 3, name: 'Женя', imgSrc: avatarImage.imgs[3].src },
            { id: 4, name: 'Андрей', imgSrc: avatarImage.imgs[4].src },
            { id: 5, name: 'Александр', imgSrc: avatarImage.imgs[2].src },
            { id: 6, name: 'Мария', imgSrc: avatarImage.imgs[1].src }
        ],
        messages: [
            { id: 1, message: 'Привет!' },
            { id: 2, message: 'Как дела?' },
            { id: 3, message: 'Чем занимаешься?' },
        ]
    },
    navbarFriends: {
        friends: [
            { id: 1, imgSrc: avatarImage.imgs[0].src, name: 'Михаил' },
            { id: 2, imgSrc: avatarImage.imgs[3].src, name: 'Дмитрий' },
            { id: 3, imgSrc: avatarImage.imgs[1].src, name: 'Светлана' },
            { id: 4, imgSrc: avatarImage.imgs[1].src, name: 'Елена' },
            { id: 5, imgSrc: avatarImage.imgs[2].src, name: 'Женя' },
            { id: 6, imgSrc: avatarImage.imgs[4].src, name: 'Кирилл' },
        ]
    }
}
//функция добавления поста на стену
export let addPost = (postMessage) => {
    let newPost = { id: 5, message: postMessage, countLike: 0, countDislike: 0 };
    state.profilePage.posts.push(newPost);
}

export default state;