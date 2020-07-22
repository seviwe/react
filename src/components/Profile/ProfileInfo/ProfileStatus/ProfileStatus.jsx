import React, { useState } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

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