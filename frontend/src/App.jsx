import { useState, useEffect } from 'react'; 
import './App.css'; 
import MenuPage from './pages/MenuPage'; 
import ScrollToTop from './components/ScrollToTop'; 

function App() {

  return (
    <>
     <MenuPage />
     <ScrollToTop />
    </>
  )
}

export default App
