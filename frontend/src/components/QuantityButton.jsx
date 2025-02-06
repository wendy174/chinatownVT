import { ShopContext } from '../context/shop-context'; 
import { useContext, useState, useEffect } from 'react'; 

export default function QuantityButton({ item, cartMode = false, onQuantityChange }) { 

    const { updateCartItemQuantity, cartItems } = useContext(ShopContext);

    // used in CartCard, get quantity from cartItems (global)

    const cartItem = cartItems.find(cartItem => cartItem._id === item._id);
    const [quantity, setQuantity] = useState(cartMode ? cartItem?.quantity || 1 : item.quantity || 1);


    // sync quantity with cartItems when used in 
    useEffect(() => { 
        if (cartMode && cartItem) { 
            setQuantity(cartItem.quantity)
        }
    }, [cartItem, cartMode]) // runs whenever cartItem changes 

    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);

        if (cartMode) {
            updateCartItemQuantity(item._id, newQuantity);
        } else {
            onQuantityChange(newQuantity);
        }
    };

    const decrementQuantity = () => { 
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);

            if (cartMode) {
                updateCartItemQuantity(item._id, newQuantity);
            } else {
                onQuantityChange(newQuantity);
            }
        }
    };


    return ( 
        <div className="flex items-center space-x-1">
            <button
            className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 text-sm hover:bg-gray-200"
            onClick={decrementQuantity}
            >
            -
            </button>
            <span className="text-sm font-medium">{quantity}</span>
            <button
            className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-yellow-500"
            onClick={incrementQuantity}
            >
            +
            </button>
        </div>
    )
}