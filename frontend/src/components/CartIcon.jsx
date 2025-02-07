import { useContext } from 'react'; 
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from '../context/shop-context'; 


export default function CartIcon() {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleCartNavigation = () => {
    navigate("/cart"); // Navigate to the cart route
  };

  const { cartItems } = useContext(ShopContext); 

  // add up quantity of all items 

  function getCartQuantity() { 
    let totalQty = 0; 
    const cartQty = cartItems.map((cartItem) => cartItem.quantity); 
    for (let qty of cartQty) { 
        totalQty += qty
    }
    return totalQty; 
  }

  const totalQty = getCartQuantity()

  return (
    <button
      type="button"
      className="relative p-1 rounded-full text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-indigo-500"
      onClick={handleCartNavigation} // Call the navigation function on click
    >
        <ShoppingCartIcon className="h-6 w-6"/>

        {/* Red Dot with quantity*/}
        { totalQty > 0 && (
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-1 text-[10px] text-white">
               {totalQty}
              </div>
        )}
    </button>
  );
}

