import "./styles.css";
import { useState } from "react";
import { React } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
//import {createElement} from "react";
//import {ReactDOM} from 'react-dom';

//const [taskList, setTasklist] = useState(null)

function Tasklist({ tasks }) {
  return (
    <div className="Tasklist">
      <h1>Todo List</h1>
      <div>
        {tasks.map((a) => (
          <div className="resultAlign btn btn-outline-dark m-2 p-2">
            <div>Task: {a.content}</div>
            <div>Assignee: {a.assignee}</div>
            <div>Priority: {a.priority}</div>
            <div>Due: {a.dueDate}</div>
            <div>Estimated time: {a.estTime}</div>
            <div>Comment: {a.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
//<div>Your task:{props.Task}</div>
//<div>{tasks.map(a => <div>{a}</div>)}</div>

export default Tasklist;
