import{ Container,TextField,Button,Typography} from '@mui/material';
import { Person, Lock } from '@mui/icons-material';

export default function LoginForm(){
  return (   
   <Container component='div' sx={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column',gap:'1.2rem', width:'100%'}}>
    <Container sx={{width:'60%',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
      <Person fontSize='large'  color='info'/>
      <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      label="username"
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
    <Button variant='contained' color='primary' sx={{width:'20%'}}>Signin</Button>
  </Container>
  )
}