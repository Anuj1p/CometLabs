import React from 'react'
import Image from 'next/image'
import styles from './card.module.css';

const index = ({val}) => {
    return (
        <div className={styles.mainCardComponent}>
            <Image
                alt="card-img"
                src={val.imgsrc}
                className={styles.img}
            />
            <div className={styles.HeadingContainer}>{val.heading}</div>
            <div className={styles.SubHeadingContainer}>{val.subHeading}</div>
            <div className={styles.button}>{val.buttontext}</div>
        </div>
    )
}

export default index