import { useState } from "react";

const Formulario = ({setTasks}) => {

    const [newtask, setNewtasks] = useState("");
    const HandleNewTasks = (e) =>{
        e.preventDefault();
        setTasks((prevValue)=>{
            prevValue.push({text : newtask, completed: false});
            return ([...prevValue]);
        })
        setNewtasks("");
    }

    return(
            <div>
                <form onSubmit={HandleNewTasks}>
                    <div>
                        <input type="text" 
                        name="taskInput" 
                        id="tasksIpt"
                        value={newtask}
                        onChange={(e)=>setNewtasks(e.target.value)}
                        />
                    </div>
                    <br />
                    <button type="submit">Add</button>
                </form>
            </div>
    )
}
export default Formulario;
