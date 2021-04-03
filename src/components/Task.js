import { List, ListItemText , ListItem, ListItemAvatar, Button } from '@material-ui/core';
import React from 'react';
import './Task.css';
import db from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Task = (props) => {
  return(
  <List className='task-list'>
    <ListItem>
      <ListItemAvatar />
      <ListItemText primary='Task' secondary={props.task.task}></ListItemText>   
    </ListItem>
    <DeleteForeverIcon onClick={event => db.collection('tasks').doc(props.task.id).delete()} />
  </List>
  )
}

export default Task;