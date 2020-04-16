import avatarImage from './imgReducer';

//список друзей и вся инфа о них. Берется из сервера...
let initialState = {
    friends: [
        { id: 1, imgSrc: avatarImage.getAvatarImage(0), name: 'Михаил', surname: 'Павлов', status: 'Я босс', location: { country: 'Россия', city: 'Муром' } },
        { id: 2, imgSrc: avatarImage.getAvatarImage(3), name: 'Дмитрий', surname: 'Иванов', status: 'Волк воет, а собака лает', location: { country: 'Россия', city: 'Владимир' } },
        { id: 3, imgSrc: avatarImage.getAvatarImage(1), name: 'Светлана', surname: 'Ясная', status: 'Я здесь король', location: { country: 'Россия', city: 'Муром' } },
        { id: 4, imgSrc: avatarImage.getAvatarImage(1), name: 'Елена', surname: 'Гребникова', status: '', location: { country: 'Россия', city: 'Москва' } },
        { id: 5, imgSrc: avatarImage.getAvatarImage(2), name: 'Женя', surname: 'Казанский', status: 'Не бойся перемен', location: { country: 'Россия', city: 'Муром' } },
        { id: 6, imgSrc: avatarImage.getAvatarImage(4), name: 'Кирилл', surname: 'Эльман', status: '', location: { country: 'Украина', city: 'Киев' } },
    ]
};

export const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;