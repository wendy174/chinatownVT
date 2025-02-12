import { useRef, useState, useEffect } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import CartIcon from "../CartIcon";
import UserIcon from "../UserIcon";
import Navbar from "../Navbar"; 
import SearchBar from "../SearchBar"; 

export default function MenuNavbar({ menu, onCategoryClick }) {
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [direction, setDirection] = useState(null);

  const navigate = useNavigate();

  const handleNavHome = () => {
    navigate("/");
  };

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
    <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg">
      {/* Top Section: Home Button, Restaurant Name, and Icons */}
      <Navbar />
 

      {/* Bottom Navbar */}
      {/* Scrollable Menu */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Hover Zone */}
        <div
          className="absolute left-0 top-0 h-full w-12"
          onMouseEnter={() => handleScrollStart("left")}
          onMouseLeave={handleScrollStop}
        />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide no-scrollbar scroll-smooth items-center space-x-3"
        >
          {menu.map((category) => (
            <button
              key={category._id}
              onClick={() => onCategoryClick(category._id)}
              className="whitespace-nowrap py-2 px-4 bg-gray-50 hover:bg-gray-200 rounded-md"
            >
              {category._id}
            </button>
          ))}
        </div>

        {/* Right Hover Zone */}
        <div
          className="absolute right-0 top-0 h-full w-12"
          onMouseEnter={() => handleScrollStart("right")}
          onMouseLeave={handleScrollStop}
        />
      </div>
    </div>
  );
}









