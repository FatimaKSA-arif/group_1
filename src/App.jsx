import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Navbar/>
      <Routes>
        <Route path='/a' element={<Signup/>}/>
      </Routes>
        
    </>
  )
}

export default App
