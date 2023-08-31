'use client'
import { Container,TextField,Button,Typography,List,ListItem,ListItemText } from "@mui/material"
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState,useEffect } from 'react';

export default function Home() {
  const [todo,setTodo] = useState('')
  const [todos,setTodos] = useState<string[]>([])

  const addTodo =()=>{

    if(todo.trim() !== ''){
      setTodos([...todos,todo])
      setTodo('')
  }}

  
  const handleOnChange = (event:any) => setTodo(event.target.value)
  
  const handleCompleted = ()=> {}

  const deleteTodo = (index: number) => {
    const todosCopy = [...todos]
    todosCopy.splice(index,1)
    setTodos(todosCopy)
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
        <Button variant="outlined" onClick={addTodo}>Add Todo</Button>
      </Container>
      <Container id={'todo-container'}>
        <List sx={{}} component="nav" aria-label="mailbox folders">
          {todos.map((todoItem,index) =>(
            <div key={index + todoItem}>
              <ListItem button>
                <ListItemText primary={todoItem}></ListItemText>
                <Button onClick={() => deleteTodo(index)} variant="outlined">
                  <DeleteIcon></DeleteIcon>
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
