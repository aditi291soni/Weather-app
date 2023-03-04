import React from 'react'
import Weather from './Weather'
import Single from './Single'
import './App.css'
import { Router,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
    {/* <Router>
      <Route path="/" element={<Weather/>}/>
      <Route path="/:id" element={<Single/>}/>

    </Router> */}
    
      
    <Weather/>
    </div>
  )
}

export default App
