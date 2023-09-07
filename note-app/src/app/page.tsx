'use client'
import React, { useState, useEffect } from 'react';
import {
  TextField,
  Container,
  Button,
  Typography,
  ListItem,
  Divider,
  List,
  ListItemText,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Backspace';
import useLocalStorage from 'use-local-storage';

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useLocalStorage<{ heading: string; note: string; date: string }[]>('notes', []);

  useEffect(() => {
    // This effect ensures that localStorage changes are reflected in the component state.
    setNotes((prevNotes) => {
      if (!prevNotes) return [];
      return prevNotes;
    });
  }, []);

  const addNewNote = () => {
    const newNote = { heading: title, note: content, date: new Date().toISOString() };
    setNotes((prevNotes) => [...(prevNotes || []), newNote]);
    setContent('');
    setTitle('');
  };

  const deleteNote = (index: number) => {
    setNotes((prevNotes) => {
      if (!prevNotes) return [];
      const updatedNotes = [...prevNotes];
      updatedNotes.splice(index, 1);
      return updatedNotes;
    });
  };

  const handleOnTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const handleOnContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContent(event.target.value);

  return (
    <Container>
      <Typography variant="h4" color="steelblue" textAlign="center">
        Note App
      </Typography>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '50%', gap: '1rem' }}>
        <TextField id="title" label="Title" variant="standard" color="primary" fullWidth value={title} onChange={handleOnTitleChange} />
        <TextField id="content" label="Content" variant="standard" color="primary" fullWidth value={content} onChange={handleOnContentChange} />
        <Button variant="contained" fullWidth onClick={addNewNote}>
          <AddIcon />
        </Button>
      </Container>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }} component={'ul'}>
        {notes.map((item, index) => (
          <> 
          <Container sx={{display:'flex',alignItems:'center'}}>        
          <ListItem component={'li'} alignItems="flex-start" sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} key={item.heading + index}>
            
            <Typography variant="h6">{item.heading}</Typography>
            <ListItemText
              primary={item.note}
              secondary={
                <React.Fragment>
                  created on: {new Date(item.date).toLocaleString()}
                </React.Fragment>
              }
            />

          </ListItem>
          <Button color="error" variant="outlined" sx={{ height: '2rem' }} onClick={() => deleteNote(index)}>
            <DeleteIcon />
          </Button>
          </Container> 
          <Divider ></Divider>
          </>         
        ))}
      </List>
    </Container>
  );
}

