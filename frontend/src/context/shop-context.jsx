import { createContext, useState } from "react"; 
export const ShopContext = createContext(null); 

export default function ShopContextProvider(props) { 

    const [cartItems, setCartItems] = useState([]); 

    function addToCart(item) {
        setCartItems((prevCart) => { 
            const existingItem = prevCart.find((cartItem) => cartItem._id === item._id) 
    
            return existingItem ? prevCart.map((cartItem) => 
                cartItem._id === item._id 
                    ? {...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem 
                )
            : [...prevCart, { ...item }]
            
        })
    } 

    // CartCard 
        // Update cart item quantity whenever clicking on increment or decrement button 
        // This works for CartCard because it updates immediately 
    const updateCartItemQuantity = (id, newQuantity) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
            item._id === id ? { ...item, quantity: newQuantity } : item)
        );
    };
        

    const contextValue = { cartItems, setCartItems, addToCart, updateCartItemQuantity }

   return ( 
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
   )
}