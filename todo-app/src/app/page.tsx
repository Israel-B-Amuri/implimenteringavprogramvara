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
  const [todo,setTodo] = useState('')
  const [todos,setTodos] = useLocalStorage<{ text:string; completed:boolean;}[]>('todos',[])
  
  const addTodo = () => {

    if(todo.trim() !== ''){
      setTodos([...todos, {text:todo,completed:false}])
      setTodo('')
    }
  }

  
  const handleOnChange = (event:any) => setTodo(event.target.value)

  const handleCompletedTask = (index:number)=>{
   const updatedTodos = [...todos]
   updatedTodos[index].completed = !updatedTodos[index].completed
   setTodos(updatedTodos)
  }

  const deleteTodo = (index: number) => {
    const todosCopy = [...todos]
    todosCopy.splice(index,1)
    setTodos(todosCopy)
  }

  const clearTodos = ()=>{
    const updatedTodos = [...todos]
    setTodos([])
  }
  return (
    <Container sx={{      
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      gap:'3rem'}}>
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
        <Button variant="contained" onClick={addTodo}><AddIcon/></Button>
      </Container>
      <Button variant="contained" color="error" onClick={clearTodos}><DeleteIcon/></Button>
      <Container id={'todo-container'}>
        <List sx={{}} component="nav" aria-label="mailbox folders">
          {todos.map((todoItem,index) =>(
            <div key={index + todoItem.text}>
              <ListItem sx={{display:'flex', gap:'2rem'}}>
                <ListItemText sx={{textDecoration: todoItem.completed ? 'line-through':'none'}} primary={todoItem.text}></ListItemText>
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
