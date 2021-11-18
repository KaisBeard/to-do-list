import './App.css';
import Tasklist from "./TaskList"
import {useState} from "react"

const taskTemplate = {
  content: '',
  assignee: '',
  dueDate: '',
  priority: '',
  estTime: ''
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
      <label>Task<input type="text" name="content" onChange={handleChange}/></label>
      <label> Assignee
        <select name="assignee" onChange={handleChange}>
          <option value=""></option>
          <option value="Kai">Kai</option>
          <option value="Fran">Fran</option>
          <option value="Divya">Divya</option>
      </select>
      </label>

      <label>Due<input type="date" name="dueDate" onChange={handleChange} /></label>
      <label> Priority
        <select name="priority" onChange={handleChange}>
          <option value=""></option>
          <option value="Very High">Very High</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
      </select>
      </label>
      <label>Estimated time (h)<input type="number" min="0" max="12" step="0.25" name="dueDate" onChange={handleChange} /></label>
      <button onClick={handleSubmit}>Add new Task</button>    
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
