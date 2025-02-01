import { useState, useContext } from 'react'; 
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShopContext } from '../../context/shop-context'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function MenuCard({ item }) { 
    const [quantity, setQuantity] = useState(1); 
    const [instructions, setInstructions] = useState('');
    const [selectedSize, setSelectedSize] = useState('default'); // Default size selection

    const { addToCart, cartItems } = useContext(ShopContext);

    const handleQuantityChange = (e) => { 
        setQuantity(e.target.value);
    };

    const handleInstructionsChange = (e) => { 
        setInstructions(e.target.value);
    };

    const handleSizeChange = (value) => {
        setSelectedSize(value);
    };

    // Highlights menuCard if item is in cart
    const isItemInCart = cartItems.some((cartItem) => cartItem._id === item._id);
    
    // Find item in cart and get its quantity 
    // .find searches for object where _id matches with the current item.id
    const cartItem = cartItems.find((cartItem) => cartItem._id === item._id); 
    const itemQuantityInCart = cartItem ? cartItem.quantity : 0; 


    const sizeSelection = () => { 
        if (item.prices.small && item.prices.large !== null) { 
            return ( 
                <RadioGroup value={selectedSize} onValueChange={handleSizeChange}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="small" />
                        <Label htmlFor="small">Small: ${item.prices.small.toFixed(2)}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="large" />
                        <Label htmlFor="large">Large: ${item.prices.large.toFixed(2)}</Label>
                    </div>
                </RadioGroup>
            );
        }
    };

    const handleAddToCart = () => {
        const selectedPrice = selectedSize === 'small'
            ? item.prices.small
            : selectedSize === 'large'
                ? item.prices.large
                : item.prices.default; // if both conditions are false selectedPrice is default 


        // Does not mutate original item in db 
        // Adds new Properties to selected item and saves into state
        addToCart({
            ...item,
            selectedSize,
            selectedPrice,
            quantity,
            instructions,
        });
    };

    return ( 
        <div className='py-3'>
            <Dialog>
                <DialogTrigger asChild>
                <div className="relative">
            {/* Quantity Badge - Only show if item is in cart */}
            {itemQuantityInCart > 0 && ( 
                 <span className="absolute top-2 right-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset shadow-md">
                 {itemQuantityInCart}
                 </span>
            )}
     
                    <Card
                             className={`${
                                isItemInCart
                                  ? "bg-red-300 border-black" // Highlight for items in cart
                                  : "bg-white" // Default appearance
                              } border transition-all duration-200`}
                    
                    >
                        <CardHeader
                        >
                            <CardTitle>{item.menu_id}. {item.name} {item.isSpicy && <span className="spicy-tag">🌶️</span>}</CardTitle>

                            <CardDescription>{item.descriptions.item}</CardDescription>
                            <CardDescription>${item.prices.default || item.prices.small || item.prices.large}+</CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{item.name}</DialogTitle>
                        <DialogDescription>${item.prices.default}</DialogDescription>
                    </DialogHeader>

                    {sizeSelection()}

                    <div className="mt-4">
                        <label className="block mb-1">Quantity</label>
                        <input 
                            type="number" 
                            value={quantity} 
                            onChange={handleQuantityChange} 
                            min="1"
                            className="border p-2 w-full"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-1">Special Instructions</label>
                        <textarea 
                            value={instructions} 
                            onChange={handleInstructionsChange} 
                            className="border p-2 w-full"
                            placeholder="Add any special requests..."
                        />
                    </div>

                    <div className="mt-6">
                        <button 
                            onClick={handleAddToCart}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                        >
                            Add to Order 
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
