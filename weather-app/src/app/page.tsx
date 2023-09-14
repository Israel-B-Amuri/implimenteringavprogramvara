'use client'
import React, {useState} from 'react'
import { Container,TextField,Button,Typography,Box, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterIcon from '@mui/icons-material/Water';


export default function Home() {
  const [userInput,setUserInput] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
  const [weatherData,setWeatherData] = useState({
    cityName:'',
    countryCode:'',
    temp:null || 0,
    description:'',
    humidity:'',
    icon:'',
    time:0
  })

  const handleUserInput = (event:React.ChangeEvent<HTMLInputElement>)=>setUserInput(event.target.value)

  async function searchData(city:string) {
    const key ='07558226a3493cdaa161f7cc8ce7b4aa'
    try{

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
      const data = await response.json()
      setWeatherData({
        cityName:data.name,
        description:data.weather[0].description,
        temp: Math.floor(data.main.temp),
        humidity:data.main.humidity,
        icon:data.weather[0].icon,
        countryCode:data.sys.country,
        time: data.dt,
      })
    } catch(error) {
      setErrorMessage(` We couldn't find the city you entered. Kindly check if the spelling is correct`);  
    }
  }
  return (
    <Container sx={{ width :'90%',}}>
      <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'1.2rem',padding:'2rem'}}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="outlined"
          size="small"
          label='Enter city name to see weather data...'
          sx={{minWidth:'40%',}}
          onChange={handleUserInput}
        />
        <Button variant="outlined" size='large' onClick={()=>searchData(userInput)}><SearchIcon/></Button>
      </Container>

      {errorMessage.length > 0 && (
        <Container sx={{display:'flex',alignItems:'center', flexDirection:'column',flex:'start',padding:'1.2rem'}}>
          {errorMessage}
        </Container>
      )}

      {weatherData.cityName.length > 0 && errorMessage.length < 1 && (
        <Container sx={{display:'flex',alignItems:'center', flexDirection:'column',flex:'start',padding:'1.2rem'}}>
          <Typography variant='h4'fontSize={'2rem'}><LocationCityIcon color='info'/> {weatherData.cityName},{weatherData.countryCode} </Typography>
          <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt={weatherData.description}/>
          <Typography fontSize={'1.2rem'} component={'p'}>
            {weatherData.description}
          </Typography>
          <Box sx={{display:'flex', alignItems:'center',gap:'1rem'}}>
            <Typography color={'grey'}><DeviceThermostatIcon color='error'/>
            {weatherData.temp !== null ? weatherData.temp :''}°
            </Typography>
            <Typography color={'grey'}><WaterIcon color='primary'/> {weatherData.humidity}</Typography>
            <Typography color={'grey'}>
              { weatherData.time !==null ? new Date(weatherData.time * 1000).toLocaleDateString():''}
            </Typography>
          </Box>  
        </Container>
      )}
    </Container>
  )
}
