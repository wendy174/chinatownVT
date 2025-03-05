import { useContext} from 'react'; 
import { ShopContext } from '../../context/shop-context'; 

export default function CartTotalCost() { 

    const { cartItems } = useContext(ShopContext); 
    
    const calculateSubtotal = () => { 
        let sum = 0; 
        for (const singleItem of cartItems) { 
            sum += singleItem.selectedPrice * singleItem.quantity
        }

        return sum
    }

    const subtotalInCart = calculateSubtotal(); 
    const calculateTaxAmount = (subtotalInCart * 0.09); 
    const totalInCart = subtotalInCart + calculateTaxAmount + 1.00; 
    const convenienceFee = 1; 



    return ( 
        <div className="flex flex-col px-4 pt-4 space-y-1">
            <div className="flex justify-between w-full max-w-[300px]">
                <span>Subtotal:</span> 
                <span className="text-right">${subtotalInCart.toFixed(2)}</span>
            </div>
            <div className="flex justify-between w-full max-w-[300px]">
                <span>Tax:</span> 
                <span className="text-right">${calculateTaxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between w-full max-w-[300px]">
                <span>Convenience Fee:</span> 
                <span className="text-right">${convenienceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between w-full max-w-[300px] font-bold">
                <span>Total:</span> 
                <span className="text-right">${totalInCart.toFixed(2)}</span>
            </div>
        </div>
    ) 
}