'use client'
import React, {useState} from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type ContentsProps = {
  onAdd: () => void,
  onSubtract: () => void
}

export default function Contents({onAdd, onSubtract}: ContentsProps) {
  const [counter,setCounter] = useState(0)

  const add = () => {
    setCounter(counter + 1);
    onAdd();
  }
  
  const subtract = () => {
    setCounter(counter - 1);
    onSubtract();
  }

  return (
    <div>
      <Button variant='outlined' onClick={add}><AddIcon/></Button>
      <Button variant='outlined' onClick={ subtract}><RemoveIcon /></Button>
      {counter}
    </div>
  )
}
