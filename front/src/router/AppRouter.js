import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../views/home';
import Header from '../components/Header';
 
export const AppRouter = () => { 

  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
} 
