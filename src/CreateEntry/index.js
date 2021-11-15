import "./styles.css";
import {useState} from "react";
import {React} from "react";
//import {createElement} from "react";

function InputField () {
    
    
    /*
    const [Task, setTask] = useState(0);
    function SaveInput () {
        console.log({Task})
    } */
    
    function createEntry () {
        React.createElement('li', {id: 'li1'},'one');
    }

    return(
    <div>
        <button onClick={createEntry}>Click here</button>

        <form>
            <label>
                Task: 
             </label>
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
        </form>
       
    </div>
    )
}




/*
{textInput}

<input type="text" name="name" value={setTask}></input>
    <button onClick= {SaveInput}>Submit</button>
    <input type="submit" value="Submit" />
*/







export default InputField;