import React from 'react';
import Box from '@mui/material/Box';
import AsideMenu from './menu/AsideMenu'

export default function MenuNavigation({ children }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <AsideMenu />
            <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 8 }}>
                {children}
            </Box>
        </Box>
    );
}