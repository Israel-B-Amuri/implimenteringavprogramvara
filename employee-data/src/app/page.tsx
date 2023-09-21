'use client'
import React, {useState} from 'react'
import {ToggleButton,ToggleButtonGroup,Container} from '@mui/material'
import {  Chart as ChartJS,  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend,} from 'chart.js';
import TableElement from '@/components/Table';
import BargraphElement from '@/components/Bargraph';

ChartJS.register(  CategoryScale,  LinearScale,  BarElement,  Title,  Tooltip,  Legend);

export default function CustomizedTables() {
  const [isTableVisible,setIsTableVisible] = useState(Boolean)
  const buttonStyle = {
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    color : 'white',
    border:'none',
  }
  return (
    <Container sx={{padding:'2rem'}}>
      <ToggleButtonGroup
      color="primary"
      exclusive
      aria-label="Platform"
      >
        <ToggleButton value="list" style={isTableVisible ? buttonStyle:{}} onClick={()=> {setIsTableVisible(true)}}>Employees List</ToggleButton>
        <ToggleButton value="performance" style={!isTableVisible ? buttonStyle:{}} onClick={()=>setIsTableVisible(false)}>Peformance Metric</ToggleButton>
      </ToggleButtonGroup>
    {isTableVisible ? <TableElement/> : <BargraphElement/>}
    </Container>
  );
}