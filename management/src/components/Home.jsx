import { Button, Link, Snackbar, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { } from '../componentcss/home.css'
import { Person } from '@mui/icons-material'
import axios from 'axios';

function Home() {

  const [inputValue, setInputValue] = useState('');
  const [successToastOpen, setSuccessToastOpen] = useState(false);
  const [failedToastOpen, setFailedToastOpen] = useState(false);
  const [userLoginDetails, setUserLoginDetails] = useState([]);
  const [userInformation,setUserInformation] = useState([]);

  useEffect(() => {
    userDetails();
  }, [])

  async function userDetails() {
    const apiCall = await axios.get(`http://localhost:8000/employees`);
    const apiData = await apiCall.data;
    const userData = [];
    apiData.map(({ LoginId }) => {
      userData.push(LoginId);
    });
    setUserLoginDetails(userData);
    setUserInformation(apiData);
  }

  const handleInput = ({ target: { value } }) => {
    setInputValue(value);

  }

  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessToastOpen(false);
    setFailedToastOpen(false);
  }

  const checkDataBase = () => {
    if (userLoginDetails.includes(inputValue)) {
      setSuccessToastOpen(true);
      SendData();
    } else {
      setFailedToastOpen(true);
    }
    setInputValue('');
  }

  const SendData = async()=>{
    try {
      const data = userInformation.find(({LoginId})=> LoginId === inputValue);
      const response = await axios.post('http://localhost:8000/login',{loginId : inputValue,Name : data.Name});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Stack className='homepage' justifyContent='center' alignItems='center' >
      {successToastOpen === true || failedToastOpen === true ?
        <Stack className='notification' >

          {successToastOpen === true ?

            <Stack className='notificationTrue noti' >
              <Snackbar autoHideDuration={2000} open={successToastOpen} onClose={handleSuccessClose} message='Successfull Login' className='successLogin login' />
            </Stack>

            : 
            null }

          {failedToastOpen === true ?

            <Stack className='notificationFalse noti' >
              <Snackbar autoHideDuration={2000} open={failedToastOpen} onClose={handleSuccessClose} message='Login failed' className='loginFail login' />
            </Stack>

            : null }

        </Stack>

        : null}

      <Stack className='card' id='homepage' gap={3} >

        <Stack className='inputField' direction='row' spacing={5} >

          <TextField placeholder='Please enter your Login Access' className='input' value={inputValue} onChange={handleInput} inputProps={{ maxLength: 6 }} />

          <Button variant='contained' className='btn' type='submit' onClick={checkDataBase} >Submit</Button>

        </Stack>

        <Stack className='userLogin' flexDirection='row' gap={10}  >

          <Stack className='newUser' flexDirection='row' alignItems='center' gap={2} >
            <Person />
            <Link href='/newuser' underline='none' >New User</Link>
          </Stack>

          <Stack className='management' >
            <Link href='/management' underline='none' >Management</Link>
          </Stack>

        </Stack>

      </Stack>

    </Stack>
  )
}

export default Home