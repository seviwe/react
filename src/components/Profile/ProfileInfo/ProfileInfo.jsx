import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import AvatarImage from './AvatarImage/AvatarImage';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.profileInfo}>
            <div className={styles.left}>
                <AvatarImage imgSrc={props.profile.photos.large} />
            </div>
            <Button className={styles.buttonUpd} variant="contained" color="default" size="small" startIcon={<CloudUploadIcon />}>Изменить фото</Button>
            <div className={styles.right}>
                <div className={styles.text + " " + styles.border}>
                    Vsevolod Aleynikov
                </div>
                <div className={styles.border}>
                    Укажите статус...
			    </div>
                <div className className={styles.border}>
                    День рождения: 17 мая 1997 г. <br />
					Город: Муром <br />
					Место учебы: МИ ВлГУ им. Столетовых '20 <br />
                    тест <br />
                    тест <br />
                    тест <br />
                    тест <br />
                    тест <br />
                    тест
			    </div>
            </div>
        </div>
    )
}

export default ProfileInfo;