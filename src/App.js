import React, {useState} from 'react'
import Signup from './components/Signup'

import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const setTokenAndStore = token => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  return (
    <div>
      {!token ? (
        <>
          <Signup />
          <Login setToken={setTokenAndStore} />
        </>
      ) : (
        <>
          <AddTask token={token} />
          <TaskList token={token} />
        </>
      )}
    </div>
  )
}

export default App
