import React from 'react'
import employees from '../../employees .json'
import { Container } from '@mui/material'
import { Bar } from 'react-chartjs-2'

export default function BargraphElement(){
    const data = {
        labels: employees.map((employeeData)=>`${employeeData.firstName} ${employeeData.lastName}`),
        datasets:[
          {
            label : 'Performance',
            data : employees.map((employeeData)=> employeeData.performance),
            borderColor : 'black',
            backgroundColor : 'rgba(53, 162, 235, 0.5)',
          }
        ]
      }
    
return(
    <Container sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      {<Bar data = {data}/>}  
    </Container>
)
}
