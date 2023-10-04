'use client'
import * as React from 'react';
import { Container,Button,TextField,Stack,Typography } from "@mui/material";
import HomePage from '@/Components/HomePage';

export default function Home() {
  const [isLoggedIn,setIsLoggedIn] = React.useState<boolean>()
  const handleLogOut = ()=>setIsLoggedIn(false)
  return (
    <Container sx={{width:'100%', height:'100vh', display:'flex',justifyContent:'center'}}>
    { !isLoggedIn ? 
    <Stack
      component="form"
      sx={{
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <Typography>Login</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant='standard'
        label='username'
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="standard"
        label='password'
        size='small'
      />
      <Button variant='contained' onClick={()=>setIsLoggedIn(true)}>Login</Button>
    </Stack> : ''
    }
    {isLoggedIn ? <HomePage onLogout={handleLogOut}/> : ''}
    </Container>
  )
}







 