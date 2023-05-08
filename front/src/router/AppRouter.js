import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../views/home';
 
export const AppRouter = () => { 

  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
} 
