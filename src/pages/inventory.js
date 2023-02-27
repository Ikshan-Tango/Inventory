import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Inventory = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />

      
        {/* this is the add icon to add the data into inventory */}
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>

    </ThemeProvider>
  )
};
