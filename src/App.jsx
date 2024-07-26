import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li><Link to='/clockForm'>Clock Form</Link></li>
      </ul>
       
    </>
  )
}

export default App
