import './App.css';
import CreateEntry from "./CreateEntry"


//const newTask1 = `I like to work`;
//<CreateEntry newTask={`bye`}/>
//{[{firstname: `why?`}, {lastname: `but why?`}]}

const myTask = {
  job: `figure out react`,
  toDo: `now`
};

function App() {
  return (
    
    <div>
      <CreateEntry randomTask="do something"
      aTask={myTask} />
    </div>
    
  );
}

export default App;
