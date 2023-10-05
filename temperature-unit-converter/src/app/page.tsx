'use client'
import React, { useState } from 'react';
import { Container,TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';

export default function TemperatureConverter() {
  const [unit,setUnit] = useState('celsius')
  const [convertedTemperature , setConvertedTemperature] = useState('')
  const [userValue,setUserValue] = useState ('')

  const convertTemperature = () => {
    const userInput = parseFloat(userValue)

    if(!isNaN(userInput)){
      const calculate = unit === 'celsius' ? (userInput* 9/5) + 32 : (userInput - 32) * 5/9
      setConvertedTemperature(calculate.toFixed(2))
    } else{
      setConvertedTemperature('Invalid Value')
    }
  }

  return (
    <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'80%',gap:'2rem'}}>
      <Typography component='h2' fontSize='2rem' gutterBottom>TemperatureConverter</Typography>
      <FormControl fullWidth>
        <InputLabel>Select unit</InputLabel>
        <Select value={unit}  onChange={(e)=>setUnit(e.target.value)} >
          <MenuItem value='celsius'>Celsius</MenuItem>
          <MenuItem value='fahrenheit'>Fahrenheit</MenuItem>
        </Select>
      </FormControl>
     <TextField type='number' label={`Enter Temperaturein ${unit === 'celsius' ? 'celsius' : 'fahrenheits'}`} value={userValue} onChange={(e)=> setUserValue(e.target.value)} fullWidth></TextField>

      <Button variant='outlined' onClick={convertTemperature}>Convert</Button>
      <Typography>
        Converted Temp: {convertedTemperature} {unit === 'celsius' ? 'fahrenheits' : 'celsius'}
      </Typography>

    </Container>
  )
}




