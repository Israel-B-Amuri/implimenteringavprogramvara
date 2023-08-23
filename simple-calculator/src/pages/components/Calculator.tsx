import Screen from './Screen';
import {ButtonGroup, Container} from '@mui/material'
import Button from '@mui/material/Button'
import React,{useState,useEffect} from 'react';
import  Style  from './Calculator.module.css'

export default function Calculator(){
  const [inputValue,setIputValue] = useState('')
  function deleteFunction(){
    setIputValue('')
  }
  function setInputNumber(event:any){
      setIputValue(inputValue + event.target.value)    
  }
  
  return(
    <Container className={`flex flex-col items-center justify-center`} fixed>
      <Screen>{inputValue}</Screen>  
      <ButtonGroup aria-label="outlined primary button group"  fullWidth>
        <Button variant="outlined" onClick={deleteFunction} className={`${Style.lightGreyButton} text-slate-50`}>AC</Button>
        <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>+/-</Button>
        <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>%</Button>
        <Button value={'/'} variant="outlined" onClick={setInputNumber} className={`${Style.beigeButton} text-slate-50`}>/</Button>
      </ButtonGroup>
      <ButtonGroup  aria-label="outlined primary button group" fullWidth>
        <Button value={7}variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>7</Button>
        <Button value={8} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>8</Button>
        <Button value={9} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>9</Button>
        <Button value={'x'} variant="outlined" onClick={setInputNumber} className={`${Style.beigeButton} text-slate-50`}>x</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="outlined primary button group" fullWidth>
        <Button value={4} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>4</Button>
        <Button value={5} variant="outlined"onClick={setInputNumber}  className={`${Style.darkGreyButton} text-slate-50`}>5</Button>
        <Button value={6} variant="outlined"onClick={setInputNumber}  className={`${Style.darkGreyButton} text-slate-50`}>6</Button>
        <Button value={'-'} variant="outlined" onClick={setInputNumber} className={`${Style.beigeButton} text-slate-50`}>-</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="outlined primary button group" fullWidth>
        <Button value={1} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>1</Button>
        <Button value={2} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>2</Button>
        <Button value={3} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>3</Button>
        <Button value={'+'} variant="outlined" onClick={setInputNumber}  className={`${Style.beigeButton} text-slate-50`}>+</Button>
      </ButtonGroup>
      <ButtonGroup  aria-label="outlined primary button group" fullWidth>
        <Button value={0} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} ${Style.zeroButton} text-slate-50`} sx={{width:'500px'}}>0</Button>
        <Button value={','} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>,</Button>
        <Button variant="outlined" className={` ${Style.beigeButton} text-slate-50`}>=</Button>
      </ButtonGroup>
    </Container>
  )
}