import { useRef, useState, useEffect } from "react";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";
import CartIcon from "../components/CartIcon"; 
import SearchBar from "../components/SearchBar"; 
import Login from "../components/Login"; 

export default function Navbar() {

  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [direction, setDirection] = useState(null);

  const navigate = useNavigate();
  const location = useLocation(); 

  const handleNavHome = () => {
    navigate("/");
  };

  const handleBackToOrdering = () => { 
    navigate('/menu'); 
  }

  // Back to Menu Button only display in '/cart'; 
  const showBackToOrderingButton = location.pathname === '/cart'; 

  // Search bar only displays in '/menu' route; 
  const showSearchBarOnMenuPage = location.pathname === '/menu'; 

  const scroll = (dir) => {
    const scrollAmount = 12; // Faster scrolling
    if (scrollRef.current) {
      if (dir === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const handleScrollStart = (dir) => {
    setDirection(dir);
    setScrolling(true);
  };

  const handleScrollStop = () => {
    setScrolling(false);
  };

  useEffect(() => {
    let interval;
    if (scrolling) {
      interval = setInterval(() => {
        scroll(direction);
      }, 5); // Smooth and fast
    }
    return () => clearInterval(interval);
  }, [scrolling, direction]);

  return (
      <div className="w-full max-w-5xl bg-white rounded-lg">
      {/* Top Section: Home Button, Restaurant Name, and Icons */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        {/* Left Section: Home Button and Restaurant Name */}
        <div className="flex items-center space-x-4">
          {/* Conditionally Render Back Button if on Cart Page */}
            {showBackToOrderingButton && ( 
              <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={handleBackToOrdering}
              >
              <ArrowLeftIcon className="w-6 h-6 text-gray-800" />
              </button>
            )}

          {/* Home Button */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={handleNavHome}
          >
            <HomeIcon className="w-6 h-6 text-gray-800" />
          </button>

          {/* Restaurant Name */}
          <h2 className="text-lg font-semibold text-gray-800">
            Chinatown Restaurant
          </h2>
        </div>

        {/* Right Section: Cart and User Icons */} 
        <div className="flex items-center space-x-4">
          {showSearchBarOnMenuPage && 
          <SearchBar />
          }
          <CartIcon className="w-6 h-6 text-gray-800" />
          <Login />
        </div>

      </div>
    </div>

  );
}

