import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'; 
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";




  export default function CartCard({ item }) { 
    const formattedPrice = item.selectedPrice.toFixed(2)

    return (
        <div>
            <Card className='m-4'>
                <CardHeader>
                    <CardTitle>{item.name} ({item.selectedSize}) {item.isSpicy && <span className="spicy-tag">🌶️</span>}</CardTitle>
                    <CardDescription>{item.descriptions.item}</CardDescription>
                    <CardDescription>${formattedPrice}</CardDescription>
                    <CardDescription>
                        Quantity: {item.quantity}
                    </CardDescription>
                    {item.instructions && <CardDescription>Special Instructions: {item.instructions}</CardDescription>}
                </CardHeader>
            </Card>
        </div>
    );
}
