import logo from './logo.svg';
import './App.css';
import Tabs from "./components/Tabs";
import Todo from "./components/Todo";

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
// Fran´s App.js code



function App() {
  return (
    <div className="container">
      <div className="h1_container">
        
        <h1>Todo List - I can´t forget to do it!</h1>
      </div>
    );
    {'}'}
      
      {/* Begin of the PERSONAL tab */}

      <Tabs>
        <div label="Personal">

        function App(props) {}
          return (
            <div className="personal_container">
              <div className="todoapp stack-large">
                
                <form>
                  <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                      
                    </label>
                  </h2>
                  <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                  />
                  <button type="submit" className="btn btn__primary btn__lg">
                    Add
                  </button>
                </form>
                <div className="filters btn-group stack-exception">
                  <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>all</span>
                    <span className="visually-hidden"> tasks</span>
                  </button>
                  <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> tasks</span>
                  </button>
                  <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> tasks</span>
                  </button>
                </div>
                <h2 id="list-heading">
                  3 tasks remaining
                </h2>
                <ul
                  role="list"
                  className="todo-list stack-large stack-exception"
                  aria-labelledby="list-heading"
                >
                  <Todo name="Buy winter clothes" />
                  <Todo name="Meet the girls on Friday for a drink =D" />
                  <Todo name="Start the vacation preparation" />
                  
                </ul>
              </div>
            </div>
          );
        

        

          
        {/* End of the PERSONAL tab */} 

        </div>
        <div label="Family">
          
        </div>
        <div label="Work">
          
        </div>
      </Tabs>
    </div>
  );
}


export default App;

