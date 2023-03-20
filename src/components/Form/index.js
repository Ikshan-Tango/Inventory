import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

import styles from './Form.module.css'

import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const Form = () => {
  return (
    <div>
      <Card sx={{ 
        minWidth: 400 ,
        margin: 'auto',   
        padding: '2rem'   
      }}>
        <Typography className={styles.heading} variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Add Medicine
        </Typography>
          <CardContent className={styles.main}>

          <FormControl fullWidth sx={{ m: 6 }} variant="filled" label="Seller" id="outlined-size-normal">


          <TextField sx={{ m: 1 }} variant="filled" label="Seller" id="outlined-size-normal"  />
          <TextField sx={{ m: 1 }}  variant="filled" label="Name" id="outlined-size-normal"  />
          <TextField sx={{ m: 1 }} variant="filled" label="Quantity" id="outlined-size-normal"  />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Expiry Date" fullWidth sx={{ m: 1 }} variant="filled" defaultValue={dayjs('2022-04-17')} />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Manufacture Date" fullWidth sx={{ m: 1 }} variant="filled" defaultValue={dayjs('2022-04-17')} />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date-in" fullWidth sx={{ m: 1 }} variant="filled" defaultValue={dayjs('2022-04-17')} />
          </LocalizationProvider>

          <TextField sx={{ m: 1 }} variant="filled" label="Cost per price" id="outlined-size-normal"  />
          <TextField sx={{ m: 1 }} variant="filled" label="Threshold" id="outlined-size-normal"  />

          
          </FormControl>

          <Button size="large"  className={styles.button} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>

          </CardContent>

      </Card>
    </div>
  )
}

