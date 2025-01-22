import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function CartIcon() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCartNavigation = () => {
    navigate("/cart"); // Navigate to the cart route
  };

  return (
    <button
      type="button"
      className="relative p-1 rounded-full text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-indigo-500"
      onClick={handleCartNavigation} // Call the navigation function on click
    >
      <ShoppingCartIcon className="h-6 w-6" />
    </button>
  );
}

