import React from 'react'
import TechStackAssesments from '../Components/TechStackAssesments';
import Experience from '../Components/Experience';
import StepperComponent from '../Components/StepperComponent';
import Box from '@mui/material/Box';
import Navigation from '../Components/Navigation';

import styles from '../styles/Home.module.css'

const about = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navigation />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <div className={styles.mainWrapper}>
                    <div className={styles.StepperConatiner}>
                        <div className={styles.StepperHeading}>Tests Progress &nbsp; <span className={styles.StepperSubHeading}>25%</span></div>
                        <StepperComponent />
                    </div>
                    <Experience />
                    <TechStackAssesments />
                </div>
            </Box>
        </Box>

    )
}

export default about