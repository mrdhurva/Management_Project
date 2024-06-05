import { Button, Link, Snackbar, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { } from '../componentcss/newUser.css'
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function User() {

  const [mobileNumber, setMobileNumber] = useState('');
  const [inputDisplayKey,setInputDisplayKey] = useState('');
  const [validKey, setValidKey] = useState(false);
  const [displayValidKey,setDisplayValidKey] = useState('');
  const [displayValidKeyOpen,setDisplayValidKeyOpen] = useState(true);
  
  const navigate = useNavigate();

  useEffect(()=>{
    generateKey();
  },[])

  const backToHomeBtn = () => {
    navigate('/')
  }

  const handleMobileNumber = ({ target: { value } }) => {
    setMobileNumber(value);
    console.log(mobileNumber)
  }

  const handleInputKey = ({ target: { value } }) => {
    setInputDisplayKey(value);
    console.log(inputDisplayKey)
  }

  const handleSnackbar=(event,reason)=>{
    if (reason === 'clickaway') {
      return;
    }
    setDisplayValidKeyOpen(false);
    setValidKey(false);
  }

  const generateValidKey = () => {
    setValidKey(true);
  }

  const generateKey = ()=>{
    const upperLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetters='abcdefghijklmnopqrstuvwxyz';

    const generateUpperCaseLetters=()=>{
      const upperLetterValues=upperLetters[Math.floor(Math.random()*upperLetters.length)];
      return upperLetterValues;
    }

    const generateLowerCaseLetters=()=>{
      const lowerLetterValues=lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
      return lowerLetterValues
    }

    const format='UULULU';

    const formatOtp=format.split('').map((char)=>{
      if(char === 'U'){
        return generateUpperCaseLetters();
      }else if(char === 'L') {
        return generateLowerCaseLetters();
      }
    }).join('');

    setDisplayValidKey(formatOtp);

  }

  const handleBtn = () => {
    if(mobileNumber === '9398521580' && inputDisplayKey === displayValidKeyOpen){
      alert('ok')
    }else{
      alert('error')
    }
  }

  return (
    <>
      <Stack className='notification' >
        {validKey === false ? <Snackbar open={displayValidKeyOpen} onClose={handleSnackbar} autoHideDuration={5000} message= {displayValidKey} className='notificationValue' id='notification'  />  : <Snackbar open={validKey} onClose={handleSnackbar} autoHideDuration={5000} message='Please contact HR' id='notification'  />  }
      </Stack>

      <Stack className='user' >
        <Stack className='backToHome' width='3rem' alignItems='center' >
          <Button type='button' onClick={backToHomeBtn} > <ArrowBackIosOutlined color='black' /> </Button>
        </Stack>
        <Stack className='userLogin' gap={3} alignItems='center' >
          <Stack className='mobileNumber input' >
            <TextField placeholder='Mobile Number' type='tel' value={mobileNumber} onChange={handleMobileNumber} inputProps={{ maxLength: 10 }} />
          </Stack>
          <Stack className='validKey input' >
            <TextField placeholder='Please enter 6 digits valid key' type='text' value={inputDisplayKey} onChange={handleInputKey} inputProps={{ maxLength: 6 }} />
            <span variant='body2' >check your mail for valid key</span>
            <Link alignItems='end' className='noId' onClick={generateValidKey} >Generate valid key</Link>
          </Stack>
          <Stack className='loginBtn' >
            <Button type='submit' variant='contained' onClick={handleBtn}  >Validate</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default User
