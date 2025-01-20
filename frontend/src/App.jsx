import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css'; 
import MenuPage from './pages/MenuPage'; 
import ScrollToTop from './components/ScrollToTop'; 
import HomePage from './pages/HomePage'; 
import ShopContextProvider from './context/shop-context'; 
import CartPage from './pages/CartPage'; 


function App() {

  return (
    <ShopContextProvider>
        <Router>
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/menu' element={<MenuPage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
        </Router>
    </ShopContextProvider>
  )
}

export default App
