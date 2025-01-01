import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useState, useEffect } from 'react'; 
import './App.css'; 
import MenuPage from './pages/MenuPage'; 
import ScrollToTop from './components/ScrollToTop'; 
import HomePage from './pages/HomePage'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
      </Routes>
    </Router>

  )
}

export default App
