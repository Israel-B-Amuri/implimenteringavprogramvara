'use client'
import React,{useState} from 'react'
import {Container,Box,TextField,Button} from '@mui/material'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function Home() {
  const [userInput,setUserInput] = useState('')

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => setUserInput(event.target.value)
  return (
    <Container>
     <Box component='form' sx={{ display:'flex', justifyContent:'center',alignItems:'center',gap:'1.7rem'}}>
      <TextField id="standard-basic" size='small' label="temperature in degrees" variant="standard"  onChange={handleOnChange}/>
      <Button variant='contained'><ChangeCircleIcon/></Button>
     </Box>
     {userInput}
    </Container>
  )
}
