import React, {useState} from 'react'
import {signup} from '../Services/api'

const Signup = () => {
  const [formData, setFormData] = useState({username: '', password: ''})
  const [message, setMessage] = useState('')

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await signup(formData)
      setMessage('Signup successful!')
    } catch (err) {
      setMessage('Signup failed.')
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default Signup
