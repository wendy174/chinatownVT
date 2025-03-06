import CartList from "../components/cart/CartList";
import Navbar from "../components/Navbar";
import CartTotalCost from "../components/cart/CartTotalCost"; 
import { Button } from "@/components/ui/button"; 
import { ShopContext } from '../context/shop-context'; 
import { useContext } from 'react'; 


export default function CartPage() {

  const { cartItems, setCartItems } = useContext(ShopContext); 

  const handleClearCart = () => { 
    setCartItems([])
  }

  return (

    <div className="flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg py-8 mt-6 px-5 ">
        
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-left">
            Cart
          </h1>
          <Button variant="secondary" onClick={() => handleClearCart()}>Clear Cart</Button>
        </div>
  
        <CartList />

        {/* Conditionally renders prices there are items in the cart */}
        { cartItems.length > 0 && ( 
            <CartTotalCost />
        )}

      </div>

    </div>
  );
}
