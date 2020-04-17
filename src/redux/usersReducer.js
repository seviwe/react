//import avatarImage from './imgReducer';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

//список пользователей соц сети и вся инфа о них. Берется из сервера
let initialState = {
    users: [
        // { id: 1, followed: true, imgSrc: avatarImage.getAvatarImage(4), name: 'Петр', surname: 'Измайлов', status: 'Я босс', location: { country: 'Россия', city: 'Муром' } },
        // { id: 2, followed: false, imgSrc: avatarImage.getAvatarImage(3), name: 'Дмитрий', surname: 'Иванов', status: 'Волк воет, а собака лает', location: { country: 'Россия', city: 'Владимир' } },
        // { id: 3, followed: false, imgSrc: avatarImage.getAvatarImage(1), name: 'Светлана', surname: 'Ясная', status: 'болею :((', location: { country: 'Россия', city: 'Муром' } },
        // { id: 4, followed: false, imgSrc: avatarImage.getAvatarImage(1), name: 'Елена', surname: 'Гребникова', status: '', location: { country: 'Россия', city: 'Москва' } },
        // { id: 5, followed: false, imgSrc: avatarImage.getAvatarImage(2), name: 'Женя', surname: 'Казанский', status: 'Не бойся перемен', location: { country: 'Россия', city: 'Выкса' } },
        // { id: 6, followed: false, imgSrc: avatarImage.getAvatarImage(0), name: 'Кирилл', surname: 'Иванов', status: '', location: { country: 'Украина', city: 'Киев' } },
        // { id: 7, followed: false, imgSrc: avatarImage.getAvatarImage(1), name: 'Дарья', surname: 'Казанская', status: '', location: { country: 'Россия', city: 'Ковров' } },
        // { id: 8, followed: false, imgSrc: avatarImage.getAvatarImage(0), name: 'Пегас', surname: 'Естивьев', status: '', location: { country: 'Беларусь', city: 'Могилев' } },
    ]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

//actionCreators
export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;