'use client'
import React,{useState} from 'react';
import {SelectChangeEvent, Container,Card,CardActionArea,CardMedia,CardContent,Typography,
FormControl,Select,InputLabel,MenuItem} from '@mui/material'
import data from '../data.json'

export default function Home() {

  //Array.From() creates a new array. Kinda like the spread method. 
  const categories:string[]  = Array.from(new Set(data.map(info => info.category))) //new Set() removes duplicates
 
  const [category, setCategory] = useState('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const filteredData = data.filter(content => content.category.includes(category))
  console.log(filteredData);
  
  return (
    <Container className="flex min-h-screen flex-col items-center justify-between p-4 gap-4">
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Age"
        onChange={handleChange}
      >
       {
         categories.map(category=><MenuItem value={category} key={`${category  + 1}`}>{category}</MenuItem>)
       }
      </Select>
      </FormControl>
      <Container sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'2rem'}}>
      {
      filteredData.map( animal => 
      <Card sx={{ width: 445,flexBasis:'2'}} key={`${animal.id}+${animal.url}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image={animal.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {animal.alt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      )}
      </Container>      
    </Container>
  )
}
