import { createContext, useState, useEffect } from "react"; 
export const ShopContext = createContext(null); 
import { useAuth } from "@clerk/clerk-react";


export default function ShopContextProvider(props) { 

    const [cartItems, setCartItems] = useState([]); 
    const { isSignedIn, userId } = useAuth(); // Clerk authentication 
    // isSignedIn is a boolean that indicates if a user is currently signed in 

    // Fetch Cart from db on login 
    useEffect(() => { 
        if (isSignedIn) { 
            fetchCartFromBackend(); 
        } else { 
            setCartItems([]) // Clear cart when user logs out 
        }
    }, [isSignedIn])


    const fetchCartFromBackend = async () => { 
        // credentials: 'include' makes sure clerk token/cookies are sent
        try { 
            const res = await fetch("http://localhost:3000/cart", { 
                credentials: "include"
            }); 
    
            const data = await res.json(); 
            setCartItems(data.items ||  []); // if data.items is undefined (no cart exists for the user, it sets cartItems to empty array to avoid errors )
        } catch (error) { 
            console.error("Error fetching cart:", error) 
        }

    }

// async functions allow you to utilized await 
// await waits for a promise/response from the backend before continuing on with the next line of code 
// without await ui does not reflect what is returned by the backend 

    const saveCartToBackend = async (newCart) => {
        if (isSignedIn) {
            await fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ items: newCart }),
            });
        }
    };



    function addToCart(item) {
        setCartItems((prevCart) => { 
            const existingItem = prevCart.find((cartItem) => cartItem._id === item._id) 
            const updatedCart = existingItem 
                ? prevCart.map((cartItem) => 
                cartItem._id === item._id 
                    ? {...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem 
                )
            : [...prevCart, { ...item }]
            
            saveCartToBackend(updatedCart); 
            return updatedCart; 
        })
    } 

    // CartCard 
        // Update cart item quantity whenever clicking on increment or decrement button 
        // This works for CartCard because it updates immediately 
    // **Update Cart Item Quantity**
    const updateCartItemQuantity = (id, newQuantity) => {
        setCartItems((prevCart) => {
            const updatedCart = prevCart.map((item) => 
                item._id === id ? { ...item, quantity: newQuantity } : item
            );

            saveCartToBackend(updatedCart); // Sync with MongoDB
            return updatedCart;
        });
    };

    const contextValue = { cartItems, setCartItems, addToCart, updateCartItemQuantity }

   return ( 
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
   )
}