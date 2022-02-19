import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import Card from '../Card';

import styles from './TechStackAssesments.module.css'

const TechStackAssesments = () => {

    const cardData = [
        {
            id: 1,
            imgsrc: require('../../../images/react-icon.svg'),
            heading: 'ReactJS 16.8++',
            subHeading: '40 min',
            buttontext: 'Start test'
        }, 
        {
            id: 2,
            imgsrc: require('../../../images/react-icon.svg'),
            heading: 'Redux',
            subHeading: '30 min',
            buttontext: 'Start test'
        }, 
        {
            id: 3,
            imgsrc: require('../../../images/react-icon.svg'),
            heading: 'ReactJS 16.8++',
            subHeading: '40 min',
            buttontext: 'Start test'
        },
        {
            id: 4,
            imgsrc: require('../../../images/react-icon.svg'),
            heading: 'Redux',
            subHeading: '30 min',
            buttontext: 'Start test'
        },
    ];

    return (
        <div className={styles.techStackMainComponent} disabled="true">
            <div className={styles.techStackUpperContainer}>
                <div className={styles.techStackHeadingContainer}>
                    <h2 className={styles.techStackHeading}>Pass a tech stack </h2>
                    <LockIcon />
                    <span className={styles.techStackSpanHeading}>Take Seniority Assessment to unlock</span>
                </div>
                <div className={styles.techStackSubHeadingContainer}>Become eligible for Jobs by passing the tests below.</div>
            </div>
            <div className={styles.techStackLowerContainer}>
                {
                    cardData.map(val => {
                        return (
                            <Card val={val} key={val.id} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TechStackAssesments