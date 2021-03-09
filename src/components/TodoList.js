import React, { useState } from 'react'
import ListItem from './ListItem'

const TodoList = () => {

    const [task, setTask] = useState("");
    const [arrayTask, setArrayTask] = useState([]);

    function addTask() {
        if(task.trim() === "") {
            alert("Es necesario agregar una tarea");
            return
        }
        setArrayTask([...arrayTask, task])
        setTask("");
    }

    function deleteTask(itemTask) {
        const newTasks = arrayTask.filter(myTask =>  myTask !== itemTask);
        setArrayTask(newTasks);
    }

    return (
        <div className="border w-50 px-5 py-3">
            <input 
                type="text"
                className="form-control"
                placeholder="Add a task..."
                onChange= {e => setTask(e.target.value)}
                onKeyDown= {e => (e.key === 'Enter') && addTask()}
                value= {task}
            />
            <ul className="list-group mt-2">
                {
                    arrayTask.map((item, idx) => (
                        <ListItem 
                            key={idx} 
                            task={item}
                            deleteTask={deleteTask} 
                        />
                    ))
                }
                
            </ul>
        </div>
    )
}

export default TodoList
