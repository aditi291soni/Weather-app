import React from 'react'
import Weather from './Weather'
import Single from './Single'
import './App.css'
import { Routes,Route,useParams } from 'react-router-dom'
const App = () => {
  let { userId } = useParams();

  return (
    <Routes>
      <Route path="/" element={<Weather/>}/>
      <Route path="/:userId" element={<Single/>}/>

    </Routes>
    
      
  )
}

export default App
