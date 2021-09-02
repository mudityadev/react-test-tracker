import React from 'react'
import TaskCom from './TaskCom'

const Task = ({tasks, onDelete}) => {
    
    return (
        <>
          {tasks.map(task =>(
              <TaskCom key={task.id} task={task} onDelete={onDelete}/>
          ))}  
        </>
    )
}

export default Task
