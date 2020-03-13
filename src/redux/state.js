let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello World!',         countLike: 20,  countDislike: 6 },
            { id: 2, message: 'It\'s my first post.', countLike: 123, countDislike: 56 },
            { id: 3, message: 'Test meesage',         countLike: 500, countDislike: 0 },
            { id: 4, message: 'Test meesage 2',       countLike: 0,   countDislike: 0 },
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Дмитрий',   imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF' },
            { id: 2, name: 'Светлана',  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPg3XBAD7Y_OBK42lSSsE6EmstHQFwDhos9-_U7qalNs8azhSk' },
            { id: 3, name: 'Женя',      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY8JBBDJ15r08pjcZ81aWOEgFGPKLV-yXEz_9LxMk7Dn_-SYOg' },
            { id: 4, name: 'Андрей',    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY8JBBDJ15r08pjcZ81aWOEgFGPKLV-yXEz_9LxMk7Dn_-SYOg' },
            { id: 5, name: 'Александр', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKs6g39CeptLQsVJ2m_w7Ib6RsPCuJuUsUsMq9aafQGVB9hhsg' },
            { id: 6, name: 'Мария',     imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV' }
        ],
        messages: [
            { id: 1, message: 'Привет!' },
            { id: 2, message: 'Как дела?' },
            { id: 3, message: 'Чем занимаешься?' },
        ]
    },
    navbarFriends: {
        friends: [
            { id: 1, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF', name: 'Михаил' },
            { id: 2, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPg3XBAD7Y_OBK42lSSsE6EmstHQFwDhos9-_U7qalNs8azhSk', name: 'Дмитрий' },
            { id: 3, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY8JBBDJ15r08pjcZ81aWOEgFGPKLV-yXEz_9LxMk7Dn_-SYOg', name: 'Светлана' },
            { id: 4, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY8JBBDJ15r08pjcZ81aWOEgFGPKLV-yXEz_9LxMk7Dn_-SYOg', name: 'Елена' },
            { id: 5, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKs6g39CeptLQsVJ2m_w7Ib6RsPCuJuUsUsMq9aafQGVB9hhsg', name: 'Женя' },
            { id: 6, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV', name: 'Кирилл' },
        ]
    }
}

export default state;