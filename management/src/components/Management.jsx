import { Button, Stack, TextField, Typography, Snackbar } from '@mui/material'
import React, { useState } from 'react';
import { } from '../componentcss/management.css'

function Management() {
  const [inputValue,setInputValue]=useState('');
  const [successLogin,setSuccessLogin] = useState(false);
  const [failLogin,setFailLogin] = useState(false);

  const handleInputValue = ({target:{value}})=>{
    setInputValue(value);
  }

  const handleVerification =()=>{
    if(inputValue === 'hello'){
      setSuccessLogin(true);
    }else{
      setFailLogin(true);
    }
    setInputValue('')
  }

  const handleToastNotification = (event,reason)=>{
    if(reason === 'clickaway'){
      return;
    }
    setSuccessLogin(false);
    setFailLogin(false);
  }
  

  return (
    <Stack className='management' >
      {successLogin === true || failLogin === true ? 
      <Stack className='loginNotification' >
          {successLogin === true ? <Snackbar className='successNotification login' open={successLogin} onClose={handleToastNotification} autoHideDuration={4000} message='Login SuccessFull' /> : null}
          {failLogin === true ? <Snackbar className='successNotification login' open={failLogin} onClose={handleToastNotification} autoHideDuration={4000} message='Login Failed' /> : null}
      </Stack> 
      : null}
      <Stack className='loginDetails' >
        <Stack className='login' >
          <Typography variant='h5' component='p' >Login</Typography>
        </Stack>
        <Stack className='loginInput' flexDirection='row' gap='3rem' alignItems='center' >
          <Stack className='input' >
          <TextField value={inputValue} onChange={handleInputValue} />
          </Stack>
          <Stack className='submitButton' >
          <Button type='submit' className='btn' variant='contained' onClick={handleVerification} >Login</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Management
