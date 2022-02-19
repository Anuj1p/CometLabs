import * as React from 'react';
import Box from '@mui/material/Box';
import ProfileComponent from './profile';
import Navigation from '../Components/Navigation';



export default function MiniDrawer() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navigation />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{ padding: '60px' }}>
                <ProfileComponent />
            </Box>
        </Box>
    );
}