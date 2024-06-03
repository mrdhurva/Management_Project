import { Button, Link, Snackbar, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { } from '../componentcss/newUser.css'
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function User() {

  const [mobileNumber, setMobileNumber] = useState('');
  const [inputDisplayKey,setInputDisplayKey] = useState('');
  const [keyId, setKeyId] = useState(false);
  const [displayKeyOpen,setDisplayKeyOpen] = useState(true);
  const [displayKey,setDisplayKey] = useState('');
  const [validKey,setValidKey] = useState('');
  
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

  const handleKey = ({ target: { value } }) => {
    setInputDisplayKey(value);
    console.log(inputDisplayKey)
  }

  const generateId = () => {
    setKeyId(true);
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

   setDisplayKey(formatOtp);

  }

  const handleBtn = () => {
    if(mobileNumber === '9398521580' && inputDisplayKey === displayKey){
      alert('ok')
    }else{
      alert('error')
    }
  }



  return (
    <>
      <Stack className='notification' >
        {keyId === false ? <Snackbar open={displayKeyOpen} message= {displayKey} className='notif notificationValue'  />  : <Snackbar open={keyId} message='Please contact HR' className='notif' />  }
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
            <TextField placeholder='Please enter 6 digits valid key' type='text' value={inputDisplayKey} onChange={handleKey} inputProps={{ maxLength: 6 }} />
            <span variant='body2' >check your mail for valid key</span>
            <Link alignItems='end' className='noId' onClick={generateId} >Generate valid key</Link>
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
