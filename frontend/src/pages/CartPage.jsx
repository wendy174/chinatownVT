import CartList from '../components/CartList'


export default function CartPage() { 
    return (
    <div>
         <h1 className="text-3xl font-semibold text-stone-700 mb-6">
                    Shopping Cart
        </h1>
        <CartList />
    </div>
    )
}