import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
// used to display a single menu item 

export const MenuCard = ({item}) => { 
    const price = item.prices.default || item.prices.small || item.prices.large
    const formattedPrice = price.toFixed(2);

    return ( 
    <div className='py-3'>
    <Card>
        <CardHeader>
            <CardTitle>{item.menu_id}. {item.name} {item.isSpicy && <span className="spicy-tag">🌶️</span>}</CardTitle>
            <CardDescription>{item.descriptions.item} </CardDescription>
            <CardDescription>${formattedPrice}+</CardDescription>
        </CardHeader>
    </Card>
    </div>
    )
}