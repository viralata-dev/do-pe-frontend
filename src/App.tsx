import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from '../components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  )
}

export default App
