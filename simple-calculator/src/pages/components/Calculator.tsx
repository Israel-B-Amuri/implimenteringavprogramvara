import Screen from './Screen';
import {ButtonGroup, Container} from '@mui/material'
import Button from '@mui/material/Button'
import React,{useState,useEffect} from 'react';
import  Style  from './Calculator.module.css'

export default function Calculator(){
  const [inputValue,setIputValue] = useState('')
  const [result,setResult] = useState('')

  const operators = ['/','X','+','-','.']

  function deleteFunction(){
    setIputValue('')
  }

  const setInputNumber = (value:any)=>{
    setIputValue(inputValue + value)
  }
  const createNumButtons = ()=>{
    const numbers:any = []
    for(let i=1;i<10;i++){
      numbers.push(
        <Button key={i}     sx={{
          width: '500px',
          flex: '1 1 33.333%',
          maxWidth: '33.333%',
          fontWeight:'bold',
          fontSize:'1.3rem' 
        }} className={`${Style.darkGreyButton} text-slate-50`} value={i.toString()} onClick={()=>setInputNumber(i)}>
          {i}
        </Button>
      )
    }
    return numbers
  }
  
  return(
    <Container className={`flex flex-col items-center justify-center`} fixed>
      <Screen>{result ? <span>(0)</span> : ''} {inputValue || 0}</Screen>  
      
      <ButtonGroup aria-label="outlined primary button group"  fullWidth>
        <Button variant="outlined" onClick={deleteFunction} className={`${Style.lightGreyButton} text-slate-50`}>AC</Button>
        <Button variant="outlined"   onClick={()=>setInputNumber('+')} className={`${Style.lightGreyButton} text-slate-50`}>+</Button>
        <Button variant="outlined"  onClick={()=>setInputNumber('-')} className={`${Style.lightGreyButton}  text-slate-50`}>-</Button>
        <Button variant="outlined" onClick={()=>setInputNumber('/')} className={`${Style.lightGreyButton} text-slate-50`}>/</Button>
        <Button variant="outlined" onClick={()=>setInputNumber('X')} className={`${Style.lightGreyButton} text-slate-50`}>X</Button>
      </ButtonGroup>    
      <ButtonGroup  aria-label="outlined primary button group" sx={{
        display:'flex',
        flexWrap: 'wrap',
      }}>
        {createNumButtons()}
        <Button     sx={{
            width: '500px',
            flex: '1 1 33.333%', 
            maxWidth: '33.333%',
            fontWeight:'bold',
            fontSize:'1.3rem'
          }} value={0} variant="outlined" onClick={()=>setInputNumber('0')} className={`${Style.darkGreyButton} ${Style.zeroButton} text-slate-50`} >
            0
        </Button>
        <Button     sx={{
            width: '500px',
            flex: '1 1 33.333%',
            maxWidth: '33.333%', 
            fontWeight:'bold',
            fontSize:'1.3rem'
          }} value={','} variant="outlined" onClick={()=>setInputNumber(',')}className={`${Style.darkGreyButton} text-slate-50`}>
            ,
        </Button>
        <Button     sx={{
            width: '500px',
            flex: '1 1 33.333%', 
            maxWidth: '33.333%',
            fontWeight:'bold',
            fontSize:'1.3rem' 
          }} variant="outlined" className={` ${Style.beigeButton} text-slate-50`}>=</Button>
      </ButtonGroup>
    </Container>
  )
}