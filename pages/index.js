import React from 'react'
import styles from '../Components/ProfileComponent/ProfileComponent.module.css';
import Box from '@mui/material/Box';
import Component from '../Components/ProfileComponent/EditProfile';
import SkillComponent from '../Components/ProfileComponent/SkillComponent';
import Navigation from '../Components/Navigation';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className={styles.mainComponent}>
          <div className={styles.companyLogo}>Turing</div>
          <Component
            leftHeading="Upload your resume"
            rightHeading="Anuj_Resume.pdf"
          />
          <Component 
            leftHeading="ANUJ SHARMA"
            bottomContainer={true}
          />
          <Component
            leftHeading="Overall Experience"
            rightHeading="3 years/ 2 years remote"
            rightsubHeading="Great English Proficiency"
          />
          <Component
            leftHeading="Availibility"
            rightHeading="Full Time"
            rightsubHeading="Ready to start now"
          />
          <Component
            leftHeading="Role and current Salary"
            rightHeading="Web Frontend"
            rightsubHeading="Current Salary: $1000/year"
          />
          <SkillComponent />
        </div>
      </Box>
    </Box>
  )
}

export default App