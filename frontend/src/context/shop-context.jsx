
import { createContext, useState } from "react"; 

export const ShopContext = createContext(null); 

export default function ShopContextProvider(props) { 

    const [cartItems, setCartItems] = useState([]); 


    function addToCart(item) {
        setCartItems((prevCart) => [...prevCart, item])
        console.log(cartItems)
    }


    const contextValue = { cartItems, addToCart}


   return ( 
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
   )



   
}