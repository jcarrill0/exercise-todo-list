import React, { useState } from 'react'
import ListItem from './ListItem'
import PropTypes from 'prop-types';


const TodoList = () => {

    const [task, setTask] = useState("");
    const [arrayTask, setArrayTask] = useState([]);
    const [taskCount, setTaskCount] = useState(arrayTask.length);

    function addTask() {
        if(task.trim() === "") {
            alert("Es necesario agregar una tarea");
            return
        }
        setArrayTask([...arrayTask, task])
        setTaskCount(arrayTask.length + 1 )
        setTask("");
    }

    function deleteTask(itemTask) {
        const newTasks = arrayTask.filter(myTask =>  myTask !== itemTask);
        setArrayTask(newTasks);
        setTaskCount([arrayTask.length - 1])
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
            <ul className="list-group list-group-flush mt-2">
                {
                    arrayTask.map((item, idx) => (
                        <ListItem 
                            key={idx} 
                            task={item}
                            deleteTask={deleteTask} 
                        />
                    ))
                }
                <li className="list-group-item mt-3 text-muted fs-6">
                    { `${taskCount} ${taskCount <= 1 ? 'item left' : 'items left'}` }
                </li>
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    task: PropTypes.string.isRequired,
    arrayTask: PropTypes.array,
    taskCount: PropTypes.number
};

export default TodoList
