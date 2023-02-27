import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Button from "@mui/material/Button"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const messages = [
  {
    id: 1,
    primary: 'Paracetamol',
    secondary: ["Quantity: 10","Expiry: 2026"],
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Paracetamol',
    secondary: ["Quantity: 10","Expiry: 2026"],
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Azythromycin',
    secondary: ["Quantity: 10","Expiry: 2026"],
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Paracetamol',
    secondary: ["Quantity: 10","Expiry: 2026"],
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: 'Azythromycin',
    secondary: ["Quantity: 10","Expiry: 2026"],
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Paracetamol',
    secondary: ["Quantity: 10","Expiry: 2026"],
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Azythromycin',
    secondary: ["Quantity: 10","Expiry: 2026"],
    person: '/static/images/avatar/1.jpg',
  },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export const Inv= () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inventory
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}


              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{primary}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {
                    secondary.map((it)=>(
                      <>
                        <Typography
                          variant= "p"
                        >
                          {it}
                        </Typography>
                        <br />
                        <br />
                      </>
                    ))
                  }
                  <Box
                    sx={{
                      display:"flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "100%",
                      height: "fit-content"
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginLeft: "1rem",
                        marginRight: "0.5rem"
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        marginLeft: "1rem",
                        marginRight: "0.5rem"
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>


              {/* <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem> */}
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
}