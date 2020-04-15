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
    friends: [
        { id: 1, imgSrc: avatarImage.getAvatarImage(0), name: 'Михаил', surname: 'Павлов' },
        { id: 2, imgSrc: avatarImage.getAvatarImage(3), name: 'Дмитрий', surname: 'Иванов' },
        { id: 3, imgSrc: avatarImage.getAvatarImage(1), name: 'Светлана', surname: 'Ясная' },
        { id: 4, imgSrc: avatarImage.getAvatarImage(1), name: 'Елена', surname: 'Гребникова' },
        { id: 5, imgSrc: avatarImage.getAvatarImage(2), name: 'Женя', surname: 'Казанский' },
        { id: 6, imgSrc: avatarImage.getAvatarImage(4), name: 'Кирилл', surname: 'Эльман' },
    ]
};

export const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;