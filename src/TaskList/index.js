import "./styles.css";
import {useState} from "react";
import {React} from "react";
//import {createElement} from "react";
//import {ReactDOM} from 'react-dom';

//const [taskList, setTasklist] = useState(null)



function Tasklist ({ tasks }) {
    
    return (
      <div className="Tasklist">
        <h1>Todo List</h1>
        <div>{tasks.map((a) => <div>Task: {a.content} Assignee: {a.assignee} Priority: {a.priority} Due: {a.dueDate} Estimated time: {a.estTime}</div>)}</div>
            
      </div>
    );
  }
  //<div>Your task:{props.Task}</div>
//<div>{tasks.map(a => <div>{a}</div>)}</div>



export default Tasklist;