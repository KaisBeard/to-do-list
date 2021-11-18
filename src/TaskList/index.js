import "./styles.css";
import {useState} from "react";
import {React} from "react";
//import {createElement} from "react";
//import {ReactDOM} from 'react-dom';

//const [taskList, setTasklist] = useState(null)



function Tasklist ({ tasks }) {
    
    return (
      <div className="CreateEntry">
        <h1>Todo List</h1>
        <div>{tasks.map((a) => <div>{a.content}</div>)}</div>        
      </div>
    );
  }
  //<div>Your task:{props.Task}</div>
//<div>{tasks.map(a => <div>{a}</div>)}</div>



export default Tasklist;