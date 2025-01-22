import CartList from "../components/cart/CartList";
import Navbar from "../components/Navbar";

export default function CartPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="w-full max-w-5xl px-4 py-6">
        <h1 className="text-3xl font-semibold text-stone-700 mb-6">
          Shopping Cart
        </h1>
        <CartList />
      </div>
    </div>
  );
}
