'use client';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Template = ({ children }) => {


    return (
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    )
}

export default Template