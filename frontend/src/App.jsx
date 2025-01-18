import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useState, useEffect } from 'react'; 
import './App.css'; 
import MenuPage from './pages/MenuPage'; 
import ScrollToTop from './components/ScrollToTop'; 
import HomePage from './pages/HomePage'; 
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import CustomMap from './components/Contact'; 
import ShopContextProvider from './context/shop-context'; 


function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; 


  return (
  
    <ShopContextProvider>
        <Router>
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/menu' element={<MenuPage />} />
            </Routes>
            <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
              <CustomMap />
            </APIProvider>
        </Router>
    </ShopContextProvider>
  )
}

export default App
