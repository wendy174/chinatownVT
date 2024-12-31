import { useRef, useState, useEffect } from 'react';
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

export default function MenuNavbar({ menu, onCategoryClick }) {
    const scrollRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);
    const [direction, setDirection] = useState(null);

    const scroll = (dir) => {
        const scrollAmount = 12;  // Faster scrolling
        if (scrollRef.current) {
            if (dir === 'left') {
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
            }, 5);  // Smooth and fast
        }
        return () => clearInterval(interval);
    }, [scrolling, direction]);

    return (
        <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md h-1">
            <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden py-4">
            {/* Left Hover Zone */}
            <div
                className="absolute left-0 top-0 h-full w-12"
                onMouseEnter={() => handleScrollStart('left')}
                onMouseLeave={handleScrollStop}
            />

            <Menubar
                ref={scrollRef}
                className="size-12 flex overflow-x-auto scrollbar-hide no-scrollbar scroll-smooth w-full items-center space-x-3"
                style={{ overflowY: 'hidden' }}
            >
                {menu.map((category) => (
                    <MenubarMenu key={category._id}>
                        <MenubarTrigger onClick={() => onCategoryClick(category._id)} className="whitespace-nowrap py-2 px-4">
                            {category._id}
                        </MenubarTrigger>
                    </MenubarMenu>
                ))}
            </Menubar>

            {/* Right Hover Zone */}
            <div
                className="absolute right-0 top-0 h-full w-12"
                onMouseEnter={() => handleScrollStart('right')}
                onMouseLeave={handleScrollStop}
            />
            </div>
        </div>
    ) 
} 





