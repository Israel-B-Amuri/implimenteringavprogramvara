'use client'
import React,{useState} from 'react'
import { Container } from '@mui/material'

import Contents from '@/Components/Contents'

export default function Home() {

  const [total, setTotal] = useState(0);
  

  const add = () => {
    setTotal(total + 1);
  }

  const subtract = () => {
    setTotal(total - 1);
  }

  return (
    <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'space-between',padding:"24"}}>
      <div>Hello World</div>
      {total}
      <Contents onAdd={add} onSubtract={subtract} />
      <Contents onAdd={add} onSubtract={subtract} />
      <Contents onAdd={add} onSubtract={subtract} />

    </Container>
  )
}
