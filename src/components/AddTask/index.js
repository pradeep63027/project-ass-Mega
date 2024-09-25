import React, {useState} from 'react'
import {addTask} from '../Services/api'

const AddTask = ({token, refreshTasks}) => {
  const [formData, setFormData] = useState({title: '', description: ''})

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await addTask(formData, token)
      refreshTasks()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
