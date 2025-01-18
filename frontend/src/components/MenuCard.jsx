// MenuCard displays a single menu item 

import { useState, useContext} from 'react'; 
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShopContext } from '../context/shop-context'

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
    DialogTrigger, // Button that opens the dialog/popover
  } from "@/components/ui/dialog"


export default function MenuCard({item}) { 

    // Dialog 
    const [menu, setMenu] = useState([]); 
    const [quantity, setQuantity] = useState(1); 
    const [instructions, setInstructions] = useState('');

    const {addToCart} = useContext(ShopContext)
 

    // Price 
    const price = item.prices.default || item.prices.small || item.prices.large
    const formattedPrice = price.toFixed(2);

    const handleQuantityChange = (e) => { 
        setQuantity(e.target.value)
    }

    const handleInstructionsChange = (e) => { 
        setInstructions(e.target.value)
    }

    // Conditionally render Small & Large price size  

    const sizeSelection = () => { 
        if (item.prices.small && item.prices.large !== null) { 
            return ( 
                <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">Small: ${item.prices.small.toFixed(2)}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Large: ${item.prices.large.toFixed(2)}</Label>
                    </div>
                </RadioGroup>
            )
        }
    }



    return ( 
    <div className='py-3'>
        <Dialog>
            <DialogTrigger asChild>
                <Card>
                    <CardHeader>
                        <CardTitle>{item.menu_id}. {item.name} {item.isSpicy && <span className="spicy-tag">🌶️</span>}</CardTitle>
                        <CardDescription>{item.descriptions.item} </CardDescription>
                        <CardDescription>${formattedPrice}+</CardDescription>
                    </CardHeader>
                </Card>
            </DialogTrigger>

            {/* Popover Content */}

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{item.name}</DialogTitle>
                    <DialogDescription>${formattedPrice}</DialogDescription>
                </DialogHeader>

                    {/* Conditionally render Small & Large price size  */}   
                    {sizeSelection()}

                    {/* Quantity input */}

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

                    {/* Instructions */}

                    <div className="mt-4">
                        <label className="block mb-1">Special Instructions</label>
                        <textarea 
                        value={instructions} 
                        onChange={handleInstructionsChange} 
                        className="border p-2 w-full"
                        placeholder="Add any special requests..."
                        />
                    </div>

                    {/* Add to cart button */}

                    <div className="mt-6">
                        <button 
                            onClick={() => addToCart(item)}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                            >
                            Add to Order 
                        </button>
                    </div>

            </DialogContent>
        </Dialog>
    </div>
    )
}