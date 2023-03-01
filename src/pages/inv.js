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
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material';

import { useState,useEffect } from 'react';
import styles from '../pages/inv.module.css';

import {Form} from '../components/Form';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export const Inv= () => {

      const [meds , setNewMeds] = useState(null)
      const [add, setAdd] = useState(false)
      const [formMeds, setFormMeds] = useState({
          "id": -1,
          "name":"Random",
          "quantity": 0,
          "expiry": ""
      })

      useEffect(() => {
        getMeds()
          } ,[])
  
      function getMeds() {
        axios({
            method: "GET",
            url:"/medicines/",
          })
          .then((response)=>{
            const data = response.data
            // console.log(data["id"])
            setNewMeds(data)
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
              }
          })
        }

        function createMed(event) {
          axios({
            method: "POST",
            url:"/medicines/",
            data:{
              id: formMeds.id,
              name:formMeds.name,
              quantity: formMeds.quantity,
              expiry: formMeds.expiry
             }
          })
          .then((response) => {
            getMeds()
          })
      
          setFormMeds(({
            id: -1,
            name:"Random",
            quantity: 0,
            expiry: ""}))
      
          event.preventDefault()
      }

      function handleChange(event) { 
        const {value, name} = event.target
        setFormMeds(prevMed => ({
            ...prevMed, [name]: value})
        )}
  



  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper elevation={5} square sx={{ pb: '3rem' ,pl:'3rem' , pr:'3rem',}}>
        <Typography className={styles.head} variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Inventory
        </Typography>
        <List sx={{ mb: 2 ,
        }}>


          { meds && meds.map(({ id, quantity,expiry,name}) => (
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
                  <Typography>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  
                        <Typography
                          variant= "p"
                          sx={{
                            opacity:'0.70',


                          }}
                        >
                          Quantity: {quantity}
                        </Typography>
                        <br />
                        <br />
                        <Typography
                          variant= "p"
                          sx={{
                            opacity:'0.70',
                            

                          }}
                        >
                          Expiry: {expiry}
                        </Typography>
                      
                  
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


          <StyledFab color="secondary" aria-label="add" >
            <AddIcon onClick={()=>{setAdd(true)}}/>
            {add? <Form/>: " "}
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