

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import  Style  from './Calculator.module.css';

export default function Buttongroup3(){
    return(
        <ButtonGroup aria-label="outlined primary button group" className='w-1/3'>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>4</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>5</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>6</Button>
            <Button variant="outlined" className={`${Style.beigeButton} text-slate-50`}>-</Button>
        </ButtonGroup>
    )
}