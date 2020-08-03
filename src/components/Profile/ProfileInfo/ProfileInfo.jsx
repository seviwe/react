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
import { maxLengthCreator } from "../../../utils/validators/validators";
import { FormControl, createField } from '../../common/FormsControls/FormsControls';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import VisibilityIconOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const maxLength = maxLengthCreator(50);

const useStyles = makeStyles((theme) => ({
    input: { display: 'none', },
}));

const ProfileInfo = (props) => {
    let [viewModeContact, setViewModeContact] = useState(false);
    let [editModeContact, setEditModeContact] = useState(false);
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

    //поиск работы
    const onEditSearchJob = () => {
        setEditModeSearchJob(true);
    }
    const deactivateEditModeSearchJob = () => {
        setEditModeSearchJob(false);
    }

    //о работе
    const onEditJobDesc = () => {
        setEditModeJobDesc(true);
    }
    const deactivateEditModeJobDesc = () => {
        setEditModeJobDesc(false);
    }

    //о себе
    const onEditMe = () => {
        setEditModeMe(true);
    }
    const deactivateEditModeMe = () => {
        setEditModeMe(false);
    }

    let profile = {};
    if (props.profile) {
        profile = {
            userId: props.profile.userId,
            lookingForAJob: props.profile.lookingForAJob ? props.profile.lookingForAJob : false,
            LookingForAJobDescription: props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "отсутствует",
            fullName: props.profile.fullName,
            AboutMe: props.profile.aboutMe ? props.profile.aboutMe : "отсутствует",
            contacts: {
                github: props.profile.contacts.github ? props.profile.contacts.github : null,
                vk: props.profile.contacts.vk ? props.profile.contacts.vk : null,
                facebook: props.profile.contacts.facebook ? props.profile.contacts.facebook : null,
                instagram: props.profile.contacts.instagram ? props.profile.contacts.instagram : null,
                twitter: props.profile.contacts.twitter ? props.profile.contacts.twitter : null,
                website: props.profile.contacts.website ? props.profile.contacts.website : null,
                youtube: props.profile.contacts.youtube ? props.profile.contacts.youtube : null,
                mainLink: props.profile.contacts.mainLink ? props.profile.contacts.mainLink : null
            }
        }
    }

    //обновление информации
    const updateProfile = (values) => {
        //имя
        if (values.newFullName) profile.fullName = values.newFullName;
        //в поиска работы да/нет
        if (values.newSearchJob) profile.lookingForAJob = values.newSearchJob;
        //обо мне
        if (values.newAboutMe) profile.AboutMe = values.newAboutMe;
        //о работе
        if (values.newJobDesc) profile.LookingForAJobDescription = values.newJobDesc;
        //контакты
        if (values.contacts) {
            profile.contacts = {
                github: values.contacts.github ? values.contacts.github : props.profile.contacts.github,
                vk: values.contacts.vk ? values.contacts.vk : props.profile.contacts.vk,
                facebook: values.contacts.facebook ? values.contacts.facebook : props.profile.contacts.facebook,
                instagram: values.contacts.instagram ? values.contacts.instagram : props.profile.contacts.instagram,
                twitter: values.contacts.twitter ? values.contacts.twitter : props.profile.contacts.twitter,
                website: values.contacts.website ? values.contacts.website : props.profile.contacts.website,
                youtube: values.contacts.youtube ? values.contacts.youtube : props.profile.contacts.youtube,
                mainLink: values.contacts.mainLink ? values.contacts.mainLink : props.profile.contacts.mainLink,
            }
        }
        props.saveProfile(profile);
        //закрытие формы редактирования
        //имя
        if (values.newFullName) setEditModeFullName(false);
        //в поиска работы да/нет
        if (values.newSearchJob) setEditModeSearchJob(false);
        //обо мне
        if (values.newAboutMe) setEditModeMe(false);
        //о работе
        if (values.newJobDesc) setEditModeJobDesc(false);
        //контакты
        if (values.contacts) setEditModeContact(false);
    }

    if (!props.profile) return <Preloader />

    return (
        <div className={styles.profileInfo}>
            <div className={styles.left}>
                <AvatarImage imgSrc={props.profile.photos.large} isOwner={props.isOwner} />
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
                    {props.isOwner && !editModeFullName && props.isAuth &&
                        <span className={styles.editButton} onClick={onEditFullName}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeFullName && props.isAuth &&
                        <span className={styles.editButton} onClick={deactivateEditModeFullName}><CreateIcon /></span>
                    }
                    {editModeFullName && props.isAuth &&
                        <AddFullNameReduxForm onSubmit={updateProfile} deactivateEditModeFullName={deactivateEditModeFullName} />
                    }
                </div>
                <div className={styles.text + " " + styles.border}>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} isAuth={props.isAuth} isOwner={props.isOwner} />
                </div>
                <div className={styles.text + " " + styles.border}>
                    <b>О себе: </b>{props.profile.aboutMe ? props.profile.aboutMe : "отсутствует"}
                    {props.isOwner && !editModeMe && props.isAuth &&
                        <span className={styles.editButton} onClick={onEditMe}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeMe && props.isAuth &&
                        <span className={styles.editButton} onClick={deactivateEditModeMe}><CreateIcon /></span>
                    }
                    {editModeMe && props.isAuth &&
                        <AddAboutMeReduxForm onSubmit={updateProfile} deactivateEditModeMe={deactivateEditModeMe} />
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
                    {props.isOwner && !editModeContact && props.isAuth &&
                        <span className={styles.editButton} onClick={onEditContacts}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeContact && props.isAuth &&
                        <span className={styles.editButton} onClick={deactivateEditModeContact}><CreateIcon /></span>
                    }
                    {!viewModeContact &&
                        <span className={styles.editButton} onClick={onViewContacts}><VisibilityIconOutlinedIcon /></span>
                    }
                    {viewModeContact &&
                        <span className={styles.editButton} onClick={deactivateEditModeContact}><VisibilityIcon /></span>
                    }

                    {editModeContact && props.isOwner && props.isAuth &&
                        Object.keys(props.profile.contacts).map(key => {
                            return <AddContactForm onSubmit={updateProfile} key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })
                    }
                    {viewModeContact &&
                        Object.keys(props.profile.contacts).map(key => {
                            return <ContactView key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                        })
                    }
                </div>
                <div className={styles.text + " " + styles.border}>
                    <b>В поиске работы:</b> {props.profile.lookingForAJob ? "да" : "нет"}
                    {props.isOwner && !editModeSearchJob && props.isAuth &&
                        <span className={styles.editButton} onClick={onEditSearchJob}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeSearchJob && props.isAuth &&
                        <span className={styles.editButton} onClick={deactivateEditModeSearchJob}><CreateIcon /></span>
                    }
                    {editModeSearchJob && props.isAuth &&
                        <AddSearchJobReduxForm onSubmit={updateProfile} deactivateEditModeSearchJob={deactivateEditModeSearchJob} />
                    }
                </div>
                <div className={styles.text + " " + styles.border}>
                    <b>Мои навыки: </b>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "отсутствует"}
                    {props.isOwner && !editModeJobDesc && props.isAuth &&
                        <span className={styles.editButton} onClick={onEditJobDesc}><CreateOutlinedIcon /></span>
                    }
                    {props.isOwner && editModeJobDesc && props.isAuth &&
                        <span className={styles.editButton} onClick={deactivateEditModeJobDesc}><CreateIcon /></span>
                    }
                    {editModeJobDesc && props.isAuth &&
                        <AddJobDescReduxForm onSubmit={updateProfile} deactivateEditModeJobDesc={deactivateEditModeJobDesc} />
                    }
                </div>
            </div>
        </div>
    )
}
//initialValues={props.profile.fullName}
const FullNameForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl} controlType="input" autoFocus={true} name={"newFullName"} placeholder={"Введите текст..."} validate={[maxLength]} />
            <button>Сохранить</button>
        </form>
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
                <b>{props.contactTitle}</b>: <Field component={FormControl} controlType="input" name={"contacts." + props.contactTitle} placeholder={"Введите текст..."} />
                <button>Сохранить</button>
                {/* Вывод ошибки */}
                {props.error && <div className={styles.formError}>
                    {props.error}
                </div>
                }
            </form>
        </div>
    )
}

const searchJobForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type={"checkbox"} component={"input"} name={"newSearchJob"} />
            <button>Сохранить</button>
        </form>
    )
}

const jobDescForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl} controlType="input" autoFocus={true} name={"newJobDesc"} placeholder={"Введите текст..."} validate={[maxLength]} />
            <button>Сохранить</button>
        </form>
    )
}

const aboutMeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormControl} controlType="textarea" cols={"30"} autoFocus={true} name={"newAboutMe"} placeholder={"Введите текст..."} validate={[maxLength]} />
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