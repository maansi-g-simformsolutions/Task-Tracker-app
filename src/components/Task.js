import { List, ListItemText,Input, ListItem, ListItemAvatar, Button} from "@material-ui/core";
import React, { useState } from "react";
import "./Task.css";
import db from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Task = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [input, setInput] = useState('');

  const updateTask = () => {
    db.collection('tasks').doc(props.task.id).set({
      task: input
    }, {merge: true});
    setOpen(false);
  }

  return (
    <>
      <Modal 
      open={open} 
      onClose={e => setOpen(false)}>

    <div className={classes.paper}>
      <h2 id="simple-modal-title">I am a Modal</h2>
      <Input
            placeholder={props.task.task}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
      <Button onClick={updateTask}>Update Task</Button>
    </div>

      </Modal>
      <List className="task-list">
        <ListItem>
          <ListItemAvatar />
          <ListItemText
            primary="Task"
            secondary={props.task.task}
          ></ListItemText>
        </ListItem>
        <Button onClick={e => setOpen(true)}>Edit</Button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("tasks").doc(props.task.id).delete()
          }
        />
      </List>
    </>
  );
};

export default Task;
