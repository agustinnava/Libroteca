import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../views/home/home';
import Books from '../views/search/books';
import Detail from '../views/detail/detail';
import Header from '../components/header/Header';
import AdminLibros from '../views/admin/adminLibros';
 
export const AppRouter = () => { 

  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/libros' element={<Books />}/>
        <Route  path='/libro/detalle' element={<Detail />}/>
        <Route  path='/admin' element={<AdminLibros />}/>
      </Routes>
    </Router>
  )
} 
