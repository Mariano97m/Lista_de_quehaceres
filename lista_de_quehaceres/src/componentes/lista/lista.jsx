import { Fragment } from "react";

const Lista = ({tasks, setTasks})=> {

    const handleCheck = (idx) => (e)=>{
        console.log(idx, e.target.checked);
        setTasks((prevValue)=>{
            prevValue[idx].completed = e.target.checked;
            return([...prevValue])
        })
    }

    const handleDelete = (idx) => (e) => {
        setTasks((prevValue)=>{
            const filteredlist = prevValue.filter((item, index) => index !==idx);
            return ([...filteredlist])
        })
    }

    return(
            <Fragment>
            <ul>
                {
                    tasks.map((item, idx) => {
                    return(
                        <li key={idx}>
                            <div>
                                <p style={{display:"inline", textDecoration: item.completed ? "line-through" : "none"}}>{item.text}</p>
                                <input type="checkbox" checked={item.completed} onChange={handleCheck(idx)}  />
                                <button type="button" onClick={handleDelete(idx)}>Delete</button>
                            </div>
                        </li>
                    )
                    })
                }
            </ul>
            </Fragment>
    )
}
export default Lista;