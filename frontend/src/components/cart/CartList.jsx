import CartCard from './CartCard'; 
import { useContext} from 'react'; 
import { ShopContext } from '../../context/shop-context'


export default function CartList() { 

    const { cartItems } = useContext(ShopContext); 


    return (
        <div>
            {cartItems.map((item) => (
                <CartCard key={item._id} item={item}/>
            ))}
        </div>
    )
}