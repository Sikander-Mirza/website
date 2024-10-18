import { useState } from 'react'
import './App.css'
import Routers from '../config/routers'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routers/>
    </>
  )
}

export default App
