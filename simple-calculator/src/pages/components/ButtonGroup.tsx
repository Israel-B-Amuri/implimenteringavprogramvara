
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import  Style  from './Calculator.module.css';

export default function Buttongroup(){
    return(
        <ButtonGroup aria-label="outlined primary button group"  fullWidth>
            <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>AC</Button>
            <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>+/-</Button>
            <Button variant="outlined" className={`${Style.lightGreyButton} text-slate-50`}>%</Button>
            <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>/</Button>
        </ButtonGroup>
    )
}