import { createContext, useState } from "react"; 
export const ShopContext = createContext(null); 

export default function ShopContextProvider(props) { 

    const [cartItems, setCartItems] = useState([]); 

    // When you want to use the most current state --> pass in function --> this is known as functional form

    // Use functional form to ensure your getting most current state 
        // multiple batch updates in quick succession might lead the function to use an old state because react batch state updates 
    function addToCart(item) {
        setCartItems((prevCart) => [...prevCart, item])
    }

    const contextValue = { cartItems, addToCart }

   return ( 
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
   )
}