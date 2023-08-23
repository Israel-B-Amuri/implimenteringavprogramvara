

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import  Style  from './Calculator.module.css';

export default function Buttongroup5(){
    return(
        <ButtonGroup  aria-label="outlined primary button group" fullWidth>
            <Button variant="outlined" className={`${Style.darkGreyButton} ${Style.zeroButton} text-slate-50`}>0</Button>
            <Button variant="outlined" className={`${Style.darkGreyButton} text-slate-50`}>,</Button>
            <Button variant="outlined" className={` ${Style.beigeButton} text-slate-50`}>=</Button>
        </ButtonGroup>
    )
}