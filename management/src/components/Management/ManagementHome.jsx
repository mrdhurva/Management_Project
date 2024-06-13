import { } from '../../componentcss/managementHome.css'
import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ManagementHome() {

  const navigate = useNavigate();

  const handleLogout = ()=>{
    navigate('/management')
  }

  return (
    <Stack className='managementHome' >
      <Stack className='managementNavbar' flexDirection='row' justifyContent='space-between' >
        <Stack className='logo' >
          <Link href='/management/Home' className='linkComponent' >LOGO</Link>
        </Stack> 
        <Stack className='navigation' flexDirection='row' gap='4rem' >
          <Link href='#' className='linkComponent' >Students</Link>
          <Link href='#' className='linkComponent' >Employees</Link>
          <Link href='#' className='linkComponent' >Status</Link>
          <Link href='#' className='linkComponent' >Payments</Link>
          <Link href='#' className='linkComponent' >Contact Details</Link>
          <Link href='#' className='linkComponent' onClick={handleLogout} >Logout</Link>
        </Stack>
      </Stack>
      <Stack>
      </Stack>
    </Stack>
  )
}

export default ManagementHome
