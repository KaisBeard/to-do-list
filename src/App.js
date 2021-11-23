import "./App.css";
import Tasklist from "./TaskList";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tab, Alert } from "react-bootstrap";
import { ToastBody } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import { BsCheckSquareFill } from "react-icons/bs";
import { EmailShareButton, EmailIcon } from "react-share";

const taskTemplate = {
  content: "",
  assignee: "",
  dueDate: "",
  priority: "",
  estTime: "",
};

function App() {
  const [formData, setFormData] = useState(taskTemplate);
  const [tasks, setTasks] = useState([]);
  const [taskEditing, setTaskEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
      // content: "make to do list work"
      // assignee: "fey kai"
      // Trimming any whitespace [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, formData]);
  };

  // BEGIN of task priority colors:

  // const taskPriority = [
  //   {name: 'Very High'},
  //   {name: 'High'},
  //   {name: 'Medium'},
  //   {name: 'Low'},
  // ];

  // const colors = ['#8B0000', '#FF0000', '#FFFF00', '#008000' ];

  // export default function taskPriority() {
  //   return (
  //     {taskPriority.map()}
  //   )
  // }

  // END od task priority colors - the functionality is not working

  console.log(formData);
  return (
    <div>
      <div className="container">
        <h1>WBS Group Project - Assignments:</h1>
        <div className="content-box">
          <section>
            <label>
              Task
              <input type="text" name="content" onChange={handleChange} />
            </label>
            <label>
              {" "}
              Assignee
              <select name="assignee" onChange={handleChange}>
                <option value=""></option>
                <option value="Kai">Kai</option>
                <option value="Fran">Fran</option>
                <option value="Divya">Divya</option>
              </select>
            </label>

            <label>
              Due
              <input type="date" name="dueDate" onChange={handleChange} />
            </label>
            <label>
              {" "}
              Priority
              <select name="priority" onChange={handleChange}>
                <option value=""></option>
                <option value="Very High" style={{ color: "red" }}>
                  Very High
                </option>
                <option value="High" style={{ color: "orange" }}>
                  High
                </option>
                <option value="Medium" style={{ color: "yellow" }}>
                  Medium
                </option>
                <option value="Low" style={{ color: "green" }}>
                  Low
                </option>
              </select>
            </label>
            <label>
              Estimated time (h)
              <input
                type="number"
                min="0"
                max="12"
                step="0.25"
                name="estTime"
                onChange={handleChange}
              />
            </label>
            <label>
              Comment
              <input
                type="text"
                name="comment"
                placeholder="This task is about?"
                onChange={handleChange}
              />
            </label>

            <Button onClick={handleSubmit} variant="success" size="sm">
              Add new Task
            </Button>

            

            <div>
              <Tasklist tasks={tasks} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
/*
      <CreateEntry randomTask="do something"
            Task={sendForm} />
      */

export default App;
