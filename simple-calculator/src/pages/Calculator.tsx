import Button from '@mui/material/Button'
import {Container} from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import  Style  from './Calculator.module.css';
import Buttongroup from './components/ButtonGroup';
import Buttongroup2 from './components/Buttongroup2';
import Buttongroup3 from './components/ButtonGroup3';
import Buttongroup4 from './components/ButtonGroup4';
import Buttongroup5 from './components/ButtonGroup5';

export default function Calculator(){

  return(
    <Container className={`flex flex-col items-center justify-center w-full`}>           
      <Buttongroup />
      <Buttongroup2 />
      <Buttongroup3/>
      <Buttongroup4/>
      <Buttongroup5/>
    </Container>
  )
}