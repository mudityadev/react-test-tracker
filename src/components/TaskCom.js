import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const TaskCom = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimesCircle style={{ cursor:'pointer' }}
             onClick={()=>onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default TaskCom
