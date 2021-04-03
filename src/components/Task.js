import { List, ListItemText , ListItem, ListItemAvatar } from '@material-ui/core';
import React from 'react';
import './Task.css';

const Task = (props) => {
  return(
  <List className='task-list'>
    <ListItem>
      <ListItemAvatar />
      <ListItemText primary='Task' secondary={props.text}></ListItemText>   
    </ListItem>
  </List>
  )
}

export default Task;