'use client'
import React, {useState} from 'react'
import{ Typography, Container,Link } from '@mui/material';
import LoginForm from './components/Login';
import RegisterForm from './components/register';


export default function Home() {
  const [isLoginformVissible,setLoginFormVisible] = useState(true)
  const toggleForm = ()=>{
    setLoginFormVisible(!isLoginformVissible)
  }
  return (
    <Container sx={{height:'100vh', display:'flex',justifyContent:'center',alignItems:'center',}}>
      <Container sx={{width:'100%',}}>
      <Typography variant='h2' color={'primary'} fontWeight='semi-bold' sx={{padding:'2rem'}} textAlign={'center'}>{isLoginformVissible ? 'Login' : 'Create Acount'}</Typography>
        {isLoginformVissible ? <LoginForm/> : <RegisterForm/>}
        <Container sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'2.3rem',width:'90%'}}>
          <Link onClick={toggleForm} href='#'>
            {isLoginformVissible ? `Don't have an account? Click to create one.`:'Already have an account? Signin here'}
          </Link>
          <Link href='#'>
            {isLoginformVissible ? 'forgot password?':'help?'}
          </Link>
        </Container>
      </Container>     
    </Container>
  )
}
