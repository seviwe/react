import React, { useState } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import AvatarImage from './AvatarImage/AvatarImage';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
}));

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    const classes = useStyles();

    const onAvatarPhotoSelected = (e) => {
        if (e.target.files.length) props.savePhoto(e.target.files[0]);
    }

    const onEditContacts = () => {
        setEditMode(true);
    }

    if (!props.profile) return <Preloader />

    //поиск работы
    let searchJob = "нет";
    if (props.profile.lookingForAJob) searchJob = "да";

    //о работе
    let jobDesc = ""
    if (props.profile.lookingForAJobDescription) jobDesc = "О работе: " + props.profile.lookingForAJobDescription;

    //статус
    let aboutMe = "";
    if (props.profile.aboutMe) aboutMe = <div className={styles.border}> {props.profile.aboutMe} </div>;

    return (
        <div className={styles.profileInfo}>
            <div className={styles.left}>
                <AvatarImage imgSrc={props.profile.photos.large} />
            </div>
            {props.isAuth && props.isOwner &&
                <div>
                    <input accept="image/*" className={classes.input + " " + styles.buttonUpd} id="contained-button-file" type="file" onChange={onAvatarPhotoSelected} />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="default" size="small" component="span" startIcon={<CloudUploadIcon />}>Изменить фото</Button>
                    </label>
                </div>
            }
            <div className={styles.right}>
                <div className={styles.text + " " + styles.border}>
                    <b>{props.profile.fullName}</b>
                </div>
                <div className={styles.text + " " + styles.border}>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} isAuth={props.isAuth} />
                </div>
                {aboutMe}
                <div className={styles.border}>
                    Контактная информация: <br />
                    <a href={props.profile.contacts.facebook} target="_blank"><FacebookIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.website} target="_blank"><LanguageIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.vk} target="_blank"><RedditIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.twitter} target="_blank"><TwitterIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.instagram} target="_blank"><InstagramIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.youtube} target="_blank"><YouTubeIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.github} target="_blank"><GitHubIcon fontSize="default" color="primary" /></a>
                    {props.isOwner &&
                        <span className={styles.editButton} onClick={onEditContacts}><CreateIcon /></span>
                    }
                    {editMode &&
                        Object.keys(props.profile.contacts).map(key => {
                            return <ContactForm key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })
                    }
                    <hr />
                    <b>В поиске работы:</b> {searchJob} <br />
                    {jobDesc}
                </div>
            </div>
        </div>
    )
}


const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={styles.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

const ContactForm = ({ contactTitle, contactValue }) => {
    return (
        <div className={styles.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;