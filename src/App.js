import React, { useState, useEffect } from "react";
import "./styles.css";
import Task from "./components/Task";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase.js";
import firebase from "firebase";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("tasks").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setTasks(snapshot.docs.map((doc) => doc.data().task));
    });
  }, []);

  const addTask = (event) => {
    event.preventDefault();

    db.collection("tasks").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Task</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTask}
          variant="contained"
          color="primary"
        >
          Add Task
        </Button>
      </form>
      <ul>
        {tasks.map((task) => (
          <Task text={task} />
          //<li>{task}</li>
        ))}
      </ul>
    </div>
  );
}
