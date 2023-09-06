'use client'
import { Container,TextField,Button,Typography,List,ListItem,ListItemText } from "@mui/material"
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState} from 'react';
import useLocalStorage from "use-local-storage";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import BackspaceIcon from '@mui/icons-material/Backspace';


export default function Home() {
  const [newTodo,setNewTodo] = useState('')
  const [todos,setTodos] = useLocalStorage<{ text:string; completed:boolean;}[]>('todos',[])
  
  const addTodo = () => {

    if(newTodo.trim() !== ''){
      setTodos([...todos, {text:newTodo,completed:false}])
      setNewTodo('')
    }
  }

  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewTodo(event.target.value)

  const handleCompletedTask = (index:number)=>{
   const updatedTodos = [...todos]
   updatedTodos[index].completed = !updatedTodos[index].completed
   setTodos(updatedTodos)
  }

  const deleteTodo = (index: number) => {
    const updatedTodos = [...todos]
    updatedTodos.splice(index,1)
    setTodos(updatedTodos)
  }

  const clearTodos = ()=>{
    setTodos([])
  }
  return (
    <Container sx={{      
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      gap:'3rem'
    }}>
      <Typography variant="h3" component="h3">
        Todo App
      </Typography>
      <Container sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'2rem'
        }}>
        <TextField id="standard-basic" label="Write your todo here" variant="outlined" sx={{width:'50%',}} onChange={handleOnChange}/>
        <Button variant="contained" onClick={addTodo} sx={{width:'10%',height:'3.5rem'}}><AddIcon/></Button>
      </Container>
      <Button variant="contained" color="error" onClick={clearTodos}><DeleteIcon/></Button>
      <Container id={'todo-container'}>
        <List component="nav" aria-label="mailbox folders">
          {todos.map(({text,completed},index) =>(
            <div key={index + text}>
              <ListItem sx={{display:'flex', gap:'2rem'}}>
                <ListItemText sx={{textDecoration: completed ? 'line-through':'none'}} primary={text}></ListItemText>
                <Button variant='contained' sx={{backgroundColor:'steelblue'}} onClick={()=>handleCompletedTask(index)}><DoneIcon/></Button>
                <Button onClick={() => deleteTodo(index)} variant="outlined" color='error'>
                  <BackspaceIcon/>
                </Button>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Container>
    </Container>
  )
}
