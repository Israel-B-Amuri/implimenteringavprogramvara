import Button from '@mui/material/Button'
import {Container} from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import Icon from '@mui/material';
import  Style  from './Calculator.module.css';
export default function Calculator(){
    return(
        <Container className={`flex flex-col items-center justify-center w-full`}> 
           <div className='h-20 bg-slate-400 w-1/3'></div>             
          <ButtonGroup aria-label="outlined primary button group" className='w-1/3'>
            <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>AC</Button>
            <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>+/-</Button>
            <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>%</Button>
            <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>/</Button>
          </ButtonGroup>
          <ButtonGroup  aria-label="outlined primary button group" className='w-1/3'>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>7</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>8</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>9</Button>
            <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>x</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="outlined primary button group" className='w-1/3'>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>4</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>5</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>6</Button>
            <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>-</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="outlined primary button group" className='w-1/3'>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>1</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>2</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>3</Button>
            <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>+</Button>
          </ButtonGroup>
          <ButtonGroup  aria-label="outlined primary button group" className='w-1/3'>
            <Button variant="outlined" className={`${Style.darkGreyButton} ${Style.zeroButton} text-slate-50`}>0</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>,</Button>
            <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>=</Button>
          </ButtonGroup>
        </Container>
    )
}