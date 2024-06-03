import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { } from '../componentcss/management.css'

function Management() {
  const [inputValue,setInputValue]=useState('');

  const handleInputValue=({target:{value}})=>{
    setInputValue(value);
  }

  const handleSubmit=()=>{
    inputValue==='hello' ? console.log('welcome') : console.log('first');
  }

  return (
    <Stack className='management' >
      <Stack className='login' >
        <Typography variant='h5'>Login</Typography>
      </Stack>
      <Stack className='loginInput' spacing={3} direction='row' >
        <TextField className='input' placeholder='Enter login access' value={inputValue} onChange={handleInputValue} inputProps={{maxLength:6}} />
        <Button type='submit' variant='contained' color='error' onClick={handleSubmit} >Login</Button>
      </Stack>
    </Stack>
  )
}

export default Management
