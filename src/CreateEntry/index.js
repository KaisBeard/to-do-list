import "./styles.css";
import {useState} from "react";
import {React} from "react";
//import {createElement} from "react";
//import {ReactDOM} from 'react-dom';

//const [taskList, setTasklist] = useState(null)



function Tasklist (props) {
    const [ tasks, setTasks ] = useState([]);
    const [newTask, setNewTask] = useState(props.randomTask);
    
    
    const addTask = () => {
      setTasks([...tasks, props.randomTask])
    };
    

    return (
      <div className="CreateEntry">
        <h1>Todo List</h1>
        <button onClick={addTask}>addTask</button>
        <div>{tasks.map((task) => <div>{task}</div>)}</div>
        <div>Your task:{props.aTask.job}</div>
      </div>
    );
  }
//<div>{tasks.map(a => <div>{a}</div>)}</div>
export default Tasklist;