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
import VisibilityIcon from '@material-ui/icons/Visibility';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { FormControl, createField } from '../../common/FormsControls/FormsControls';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import VisibilityIconOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const maxLength = maxLengthCreator(40);

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
}));

const ProfileInfo = (props) => {
    let [editModeContact, setEditModeContact] = useState(false);
    let [viewModeContact, setViewModeContact] = useState(false);
    let [editModeFullName, setEditModeFullName] = useState(false);
    let [editModeSearchJob, setEditModeSearchJob] = useState(false);
    let [editModeJobDesc, setEditModeJobDesc] = useState(false);
    let [editModeMe, setEditModeMe] = useState(false);

    const classes = useStyles();

    const onAvatarPhotoSelected = (e) => {
        if (e.target.files.length) props.savePhoto(e.target.files[0]);
    }

    //имя пользователя
    const onEditFullName = () => {
        setEditModeFullName(true);
    }
    const deactivateEditModeFullName = () => {
        setEditModeFullName(false);
    }
    const updateFullName = (values) => {
        //обновление имени пользователя
        console.log(values);
    }

    //контакты
    const onViewContacts = () => {
        setViewModeContact(true);
        setEditModeContact(false);
    }
    const onEditContacts = () => {
        setEditModeContact(true);
        setViewModeContact(false);
    }
    const deactivateEditModeContact = () => {
        setEditModeContact(false);
        setViewModeContact(false);
    }
    const updateContacts = (values) => {
        //обновление имени пользователя
        console.log(values);
    }


    //поиск работы
    const onEditSearchJob = () => {
        setEditModeSearchJob(true);
    }
    const deactivateEditModeSearchJob = () => {
        setEditModeSearchJob(false);
    }
    const updateSearchJob = (values) => {
        //обновление статуса поиска работы
        console.log(values);
    }

    //о работе
    const onEditJobDesc = () => {
        setEditModeJobDesc(true);
    }
    const deactivateEditModeJobDesc = () => {
        setEditModeJobDesc(false);
    }
    const updateJobDesc = (values) => {
        //обновление информации
        console.log(values);
    }

    //о работе
    const onEditMe = () => {
        setEditModeMe(true);
    }
    const deactivateEditModeMe = () => {
        setEditModeMe(false);
    }
    const updateMe = (values) => {
        //обновление раздела о себе
        console.log(values);
    }

    if (!props.profile) return <Preloader />

    //поиск работы
    let searchJob = "нет";
    if (props.profile.lookingForAJob) searchJob = "да";

    //о работе
    let jobDesc = ""
    if (props.profile.lookingForAJobDescription) jobDesc = props.profile.lookingForAJobDescription;

    //о себе
    let aboutMe = "";
    if (props.profile.aboutMe) aboutMe = props.profile.aboutMe;

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
                    {props.isOwner && !editModeFullName &&
                        <span className={styles.editButton} onClick={onEditFullName}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeFullName &&
                        <span className={styles.editButton} onClick={deactivateEditModeFullName}><CreateIcon /></span>
                    }
                    {editModeFullName &&
                        <AddFullNameReduxForm onSubmit={updateFullName} deactivateEditModeFullName={deactivateEditModeFullName} />
                    }
                </div>
                <div className={styles.text + " " + styles.border}>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} isAuth={props.isAuth} />
                </div>
                <div className={styles.text + " " + styles.border}>
                    <b>О себе: </b>{aboutMe ? aboutMe : "отсутствует"}
                    {props.isOwner && !editModeMe &&
                        <span className={styles.editButton} onClick={onEditMe}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeMe &&
                        <span className={styles.editButton} onClick={deactivateEditModeMe}><CreateIcon /></span>
                    }
                    {editModeMe &&
                        <AddAboutMeReduxForm onSubmit={updateMe} deactivateEditModeMe={deactivateEditModeMe} />
                    }
                </div>
                <div className={styles.border}>
                    <b>Контактная информация</b>
                    {/* <a href={props.profile.contacts.facebook} target="_blank"><FacebookIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.website} target="_blank"><LanguageIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.vk} target="_blank"><RedditIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.twitter} target="_blank"><TwitterIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.instagram} target="_blank"><InstagramIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.youtube} target="_blank"><YouTubeIcon fontSize="default" color="primary" /></a>
                    <a href={props.profile.contacts.github} target="_blank"><GitHubIcon fontSize="default" color="primary" /></a> */}
                    {props.isOwner && !editModeContact &&
                        <span className={styles.editButton} onClick={onEditContacts}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeContact &&
                        <span className={styles.editButton} onClick={deactivateEditModeContact}><CreateIcon /></span>
                    }
                    {!viewModeContact &&
                        <span className={styles.editButton} onClick={onViewContacts}><VisibilityIconOutlinedIcon /></span>
                    }
                    {viewModeContact &&
                        <span className={styles.editButton} onClick={deactivateEditModeContact}><VisibilityIcon /></span>
                    }

                    {editModeContact && props.isOwner &&
                        Object.keys(props.profile.contacts).map(key => {
                            return <AddContactForm onSubmit={updateContacts} key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })
                    }
                    {viewModeContact &&
                        Object.keys(props.profile.contacts).map(key => {
                            return <ContactView key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })
                    }
                </div>
                <div className={styles.text + " " + styles.border}>
                    <b>В поиске работы:</b> {searchJob}
                    {props.isOwner && !editModeSearchJob &&
                        <span className={styles.editButton} onClick={onEditSearchJob}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeSearchJob &&
                        <span className={styles.editButton} onClick={deactivateEditModeSearchJob}><CreateIcon /></span>
                    }
                    {editModeSearchJob &&
                        <AddSearchJobReduxForm onSubmit={updateSearchJob} deactivateEditModeSearchJob={deactivateEditModeSearchJob} />
                    }
                </div>
                <div className={styles.text + " " + styles.border}>
                    <b>Мои навыки: </b>{jobDesc ? jobDesc : "отсутствует"}
                    {props.isOwner && !editModeJobDesc &&
                        <span className={styles.editButton} onClick={onEditJobDesc}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeJobDesc &&
                        <span className={styles.editButton} onClick={deactivateEditModeJobDesc}><CreateIcon /></span>
                    }
                    {editModeJobDesc &&
                        <AddJobDescReduxForm onSubmit={updateJobDesc} deactivateEditModeJobDesc={deactivateEditModeJobDesc} />
                    }
                </div>
            </div>
        </div>
    )
}

const ContactView = ({ contactTitle, contactValue }) => {
    return (
        <div className={styles.contact}>
            <b>{contactTitle}</b>: {contactValue ? contactValue : "отсутствует"}
        </div>
    )
}


const ContactForm = (props) => {
    return (
        <div className={styles.contact}>
            <form onSubmit={props.handleSubmit}>
                <b>{props.contactTitle}</b>: <Field component={FormControl} controlType="input" autoFocus={true} name={"newContact"} placeholder={"Введите текст..."} validate={[required, maxLength]} />
                <button>Сохранить</button>
            </form>
        </div>
    )
}

const FullNameForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl} controlType="input" autoFocus={true} name={"newFullName"} placeholder={"Введите текст..."} validate={[required, maxLength]} />
            <button>Сохранить</button>
        </form>
    )
}

const searchJobForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/* <Field component={FormControl} controlType="checkbox" autoFocus={true} name={"newSearchJob"} onBlur={props.deactivateEditModeSearchJob} placeholder={"Введите текст..."} />
            <button>Сохранить</button> */}
            <Field type={"checkbox"} component={"input"} name={"searchJob"} />
        </form>
    )
}

const jobDescForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl} controlType="input" autoFocus={true} name={"newJobDesc"} placeholder={"Введите текст..."} validate={[required, maxLength]} />
            <button>Сохранить</button>
        </form>
    )
}

const aboutMeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl} controlType="textarea" cols={"30"} autoFocus={true} name={"newAboutMe"} placeholder={"Введите текст..."} validate={[required, maxLength]} />
            <button>Сохранить</button>
        </form>
    )
}
const AddContactForm = reduxForm({ form: 'updateContact' })(ContactForm);
const AddFullNameReduxForm = reduxForm({ form: 'updateFullName' })(FullNameForm);
const AddSearchJobReduxForm = reduxForm({ form: 'updateSearchJob' })(searchJobForm);
const AddJobDescReduxForm = reduxForm({ form: 'updatejobDesc' })(jobDescForm);
const AddAboutMeReduxForm = reduxForm({ form: 'updateAboutMe' })(aboutMeForm);

export default ProfileInfo;