import React, { useState } from 'react';
import styles from './ProfileStatus.module.css';
import { useEffect } from 'react';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    //хук запуска спец функции, после того как все отрисуется и покажется на экране
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]); //[props.status] - зависимость от статуса, тогда происходит синхронизация, когда пропсы приходят 

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            {!editMode &&
                <span onClick={activateEditMode}>{props.status || "No status..."}</span>
            }
            {props.isAuth && editMode &&
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            }
        </div>
    )

}

export default ProfileStatus;