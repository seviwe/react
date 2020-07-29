import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
}));

const ProfileInfo = (props) => {
    //console.log(props);
    const classes = useStyles();

    const onAvatarPhotoSelected = (e) => {
        //console.log(e.target.files);
        if (e.target.files.length) {
            //console.log(props);
            props.savePhoto(e.target.files[0]);
        }
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
                    {/* <input accept="image/*" className={classes.input + " " + styles.buttonUpd} id="contained-button-file" type="file" />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="default" size="small" component="span" startIcon={<CloudUploadIcon />} onChange={onAvatarPhotoSelected}>Изменить фото</Button>
                    </label> */}
                    <input type={"file"} onChange={onAvatarPhotoSelected} />
                </div>
            }
            {/* <Button className={styles.buttonUpd} variant="contained" color="default" size="small" type={"file"} startIcon={<CloudUploadIcon />}>Изменить фото</Button> */}
            <div className={styles.right}>
                <div className={styles.text + " " + styles.border}>
                    {props.profile.fullName}
                </div>
                <div className={styles.text + " " + styles.border}>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} isAuth={props.isAuth} />
                </div>
                {aboutMe}
                <div className className={styles.border}>
                    {/* День рождения: 17 мая 1997 г. <br />
                    Город: Муром <br />
					Место учебы: МИ ВлГУ им. Столетовых '20 <br />
                    <hr /> */}
                    Контактная информация: <br />
                    <a href={props.profile.contacts.facebook} target="_blank"><FacebookIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.website} target="_blank"><LanguageIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.vk} target="_blank"><RedditIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.twitter} target="_blank"><TwitterIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.instagram} target="_blank"><InstagramIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.youtube} target="_blank"><YouTubeIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.github} target="_blank"><GitHubIcon fontSize="default" color="primary" /></a>
                    <hr />
                    В поиске работы: {searchJob} <br />
                    {jobDesc}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;