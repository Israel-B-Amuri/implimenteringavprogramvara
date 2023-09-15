import{ Container,TextField,Button} from '@mui/material';
import { Person,Phone,Lock } from '@mui/icons-material';


export default function RegisterForm(){
  return (   
   <Container component='div' sx={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column',gap:'1.2rem', width:'100%'}}>
    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <Person fontSize='large'  color='info'/>
      <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      label="fullname"
      variant="outlined"
      size="small"
      sx={{width:'80%'}}
   />
    </Container>
    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
        <Phone fontSize='large'  color='info'/>
        <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        label="phone number"
        variant="outlined"
        size="small"
        sx={{width:'80%'}}
        />
    </Container>

    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <Lock fontSize='large' color='info'/>
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
        label='password'
        size='small'
        sx={{width:'80%',}}
        
      />
    </Container>
    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
    <Lock color='info' fontSize='large'/>
    <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
        label='confirm password'
        size='small'
        sx={{width:'80%',}}
        
      />
    </Container>
    <Button variant='contained' color='primary' sx={{width:'20%'}}>signup</Button>
  </Container>
  )
}