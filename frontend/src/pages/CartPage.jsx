import CartList from "../components/cart/CartList";
import Navbar from "../components/Navbar";
import CartTotalCost from "../components/cart/CartTotalCost"; 

export default function CartPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg py-8 mt-6 px-5 ">
        <h1 className="text-2xl font-bold text-left">
          Cart
        </h1>
        <CartList />

        <CartTotalCost />

   
      </div>

    </div>
  );
}
