import logo from './logo.svg';
import { useState } from 'react'

import './App.css';
import Header from './components/Header'
import Task from './components/Task'

function App() {
  // * global 
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'doctor',
        day : '08-30-2000',
        reminder: false,
    },  
    {
        id:2,
        text: 'animal',
        day : '58-21-1099',
        reminder: true,
    },
    {
        id:3,
        text: 'money',
        day : '088-2-999',
        reminder: false,
    },
])

// * delete task function
const deleteEvent = (id) => {
  // console.log('deleteTask', id)
  setTasks(tasks.filter((task) => task.id != id))
}

  const name = "raghav"
  const x = false

  return (
   <div className="container">
     {/* <Header title="manu" /> */}
     <Header />
     {tasks.length >0 ? <Task tasks={tasks} onDelete={deleteEvent}/> : 'No list'}
   </div>
  );
}

export default App;
