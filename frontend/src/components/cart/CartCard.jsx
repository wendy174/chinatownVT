import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'; 
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";


  export default function CartCard({ item }) {

    const formattedPrice = item.selectedPrice.toFixed(2); 

    const { updateCartItemQuantity } = useContext(ShopContext); 

    const incrementQuantity = () => { 
        updateCartItemQuantity(item._id, item.quantity + 1 )
    }

    const decrementQuantity = () => { 
      if (item.quantity > 1) // Prevents neg quantities 
        updateCartItemQuantity(item._id, item.quantity - 1)
    }

    // Shows size if small or large, but not when default/one-size
    const showItemSize = () => { 
      if (item.prices.small != null && item.prices.large != null) { 
        return `(${item.selectedSize})`
      }
    }

    return (
        <Card className="m-4">
          <CardHeader className="flex items-center justify-between p-4">
            {/* Left Content: Item Details */}
            <div>
              <CardTitle className="text-base font-semibold">
                {item.name} {showItemSize()}
                {item.isSpicy && <span className="spicy-tag">🌶️</span>}
              </CardTitle>
              
              {/* Instructions */}
              {/* If instructions exsists and there are spaces it renders */}
              {/* If first line statement is true then render <CardDescription>} */}

              {item.instructions && item.instructions.trim() !== "" && (
              <CardDescription className="italic">Notes: {item.instructions}</CardDescription>
            )}
 

              <CardDescription className="text-center">${formattedPrice}</CardDescription>
            </div>
    
            {/* Right Content: Quantity Incrementer */}
            <div className="flex items-center space-x-1">
              <button
                className="border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 text-sm hover:bg-gray-200"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="text-sm font-medium">{item.quantity}</span>
              <button
                className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-yellow-500"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </CardHeader>
        </Card>
      );
    }