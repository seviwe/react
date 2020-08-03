import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import Pagination from '@material-ui/lab/Pagination';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //вычисляем кол-во страниц

    let usersElement = props.usersPage.map(u => <User name={u.name} key={u.id} id={u.id} imgSrc={u.photos.small} status={u.status} followed={u.followed} follow={props.follow} unfollow={props.unfollow} toggleIsFollowInProgress={props.toggleIsFollowInProgress} followingInProgress={props.followingInProgress} isAuth={props.isAuth} />);

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
                <Pagination count={pagesCount} defaultPage={1} boundaryCount={6} page={props.currentPage} color="primary" onChange={handleChange} />
            </div>
        </div>
    )
}

export default Users;