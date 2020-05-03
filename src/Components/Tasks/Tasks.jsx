import React from "react";
import t from "./Tasks.module.css"

const Tasks = (props) => {
    let tasksList = props.tasks.map(task => <div className={t.item}> {task.name} </div>)
    return <div>
        {tasksList}
    </div>
}

export default Tasks;
