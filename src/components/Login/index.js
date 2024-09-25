import React, {useState} from 'react'
import {login} from '../Services/api'

const Login = ({setToken}) => {
  const [formData, setFormData] = useState({username: '', password: ''})
  const [message, setMessage] = useState('')

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await login(formData)
      const token = response.data.token
      setToken(token)
      setMessage('Login successful!')
    } catch (err) {
      setMessage('Login failed.')
    }
  }

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  )
}

export default Login
