import React from 'react'
import Image from 'next/image';

import styles from './SkillComponent.module.css';

const SkillComponent = () => {
    return (
        <div className={styles.mainComponent}>
            <div className={styles.upperContainer}>
                <div className={styles.heading}>Skills</div>
                <div className={styles.editContainer}>
                    <Image className={styles.logo} src={require('../../../../images/edit.png')} />
                </div>
            </div>
            <div className={styles.lowerContainer}>
                <div className={styles.experienced}>
                    <div className={styles.subHeading}>Experienced</div>
                    <div className={styles.list}>
                        <div className={styles.listitems}>Node JS</div>
                        <div className={styles.listitems}>React JS</div>
                        <div className={styles.listitems}>Redux</div>
                    </div>
                </div>
                <div className={styles.experienced}>
                    <div className={styles.subHeading}>Beginner</div>
                    <div className={styles.list}>
                        <div className={styles.listitems}>Node JS</div>
                        <div className={styles.listitems}>React JS</div>
                        <div className={styles.listitems}>Redux</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillComponent