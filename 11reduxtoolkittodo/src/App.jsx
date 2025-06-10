import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Learn about redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
// like CONTEXT-API a wrap will used, we can use that wrap in this app.jsx, if we want to wrap more components from then will apply this wrap to main.jsx.