
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import  Style  from './Calculator.module.css';

export default function Buttongroup2(){
    return(
        <ButtonGroup  aria-label="outlined primary button group" fullWidth>
        <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>7</Button>
        <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>8</Button>
        <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>9</Button>
        <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>x</Button>
      </ButtonGroup>
    )
    
}
