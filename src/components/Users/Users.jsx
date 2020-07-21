import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import Pagination from '@material-ui/lab/Pagination';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //вычисляем кол-во страниц

    let pages = [];
    //pagesCount -= 310; //временно ограничил до 50, было 360
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); //создаем массив из страниц
    }

    let usersElement = props.usersPage.users.map(u => <User name={u.name} key={u.id} id={u.id} imgSrc={u.photos.small} status={u.status} followed={u.followed} follow={props.follow} unfollow={props.unfollow} toggleIsFollowInProgress={props.toggleIsFollowInProgress} followingInProgress={props.followingInProgress} isAuth={props.isAuth} />);

    const page = props.currentPage;
    const handleChange = (event, value) => {
        props.onPageChanged(value);
    };

    return (
        <div>
            <div className={styles.panel}>
                Поиск пользователей...
            </div>
            <div className={styles.listUsers}>
                {usersElement}
            </div>
            <div className={styles.paginationCenter}>
                <Pagination count={pagesCount} defaultPage={1} boundaryCount={7} page={page} color="primary" onChange={handleChange} />
                {/* {pages.map(p => { return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p); }}>{p} </span> })} */}
            </div>
        </div>
    )
}

export default Users;