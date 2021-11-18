import './App.css';
import Tasklist from "./TaskList"
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

const taskTemplate = {
  content: '',
  assignee: ''
}

function App() {
  const [ formData, setFormData ] = useState(taskTemplate);
  const [ tasks, setTasks ] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
      // content: "make to do list work"
      // assignee: "fey kai"
      // Trimming any whitespace [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks([...tasks, formData])

  };

  console.log(formData)
  return (
   <section>
      <label>Task:<input type="text" name="content" onChange={handleChange}/></label>
      <label>Asignee:<input type="text" name="assignee" onChange={handleChange} /></label>
      <Button variant="primary" onClick={handleSubmit}>Add new Task</Button>    
    <div>
      
      <Tasklist tasks={tasks} />
    </div>
  </section>
  );   
}
/*
<CreateEntry randomTask="do something"
      Task={sendForm} />
*/

export default App;
