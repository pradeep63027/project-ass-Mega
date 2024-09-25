import React, {useState, useEffect} from 'react'
import {getTasks, deleteTask} from '../Services/api'

const TaskList = ({token}) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(token)
        setTasks(response.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchTasks()
  }, [token])

  const handleDelete = async id => {
    try {
      await deleteTask(id, token)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.description}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
