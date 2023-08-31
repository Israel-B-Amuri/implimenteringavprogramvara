
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import  Style  from './Calculator.module.css';
import React,{useState,useEffect} from 'react';


export default function Buttongroup4(){
    const [inputValue,setIputValue] = useState('')

    function setInputNumber(event:any){
        setIputValue(event.target.value)
        console.log(event.target.value,inputValue);
        
    }

    return(
        <ButtonGroup aria-label="outlined primary button group" fullWidth>
            <Button value={1} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>1</Button>
            <Button value={2} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>2</Button>
            <Button value={3} variant="outlined" onClick={setInputNumber} className={`${Style.darkGreyButton} text-slate-50`}>3</Button>
            <Button value={'+'} variant="outlined" onClick={setInputNumber}  className={`${Style.beigeButton} text-slate-50`}>+</Button>
        </ButtonGroup>
    )
}
