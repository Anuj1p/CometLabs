import React from 'react';
import Image from 'next/image';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './EditProfile.module.css';

const EditProfile = (props) => {
    const {
        leftHeading,
        rightHeading,
        rightsubHeading,
        bottomContainer
    } = props;
    return (
        <div>
            <div className={styles.mainComponent}>
                <div className={styles.leftContainer}>
                    <div className={styles.logo}>
                        <SettingsApplicationsIcon />
                    </div>
                    <div className={styles.leftHeading}>{leftHeading}</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightContainer}>
                        <div className={styles.rightHeading}>{rightHeading}</div>
                        <div className={styles.rightsubHeading}>{rightsubHeading}</div>
                    </div>
                    <div className={styles.editContainer}>
                        <Image className={styles.logo} src={require('../../../../images/edit.png')} />
                    </div>
                </div>
            </div>
            {
                bottomContainer ?
                    <div className={styles.bottomContainer}>
                        <div className={styles.emailContainer}>
                            <LocalPhoneIcon />
                            <span className={styles.email}>123456789</span>
                        </div>
                        <div className={styles.emailContainer}>
                            <MailIcon />
                            <span className={styles.email}>abc@gmail.com</span>
                        </div>
                        <div className={styles.LinkedInContainer}><LinkedInIcon /></div>
                        <div className={styles.LinkedInContainer}><GitHubIcon /></div>
                    </div> : null
            }
            <div className={styles.divider}></div>
        </div>
    )
}

export default EditProfile