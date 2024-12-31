import { useState, useEffect } from 'react'; 

export default function ScrollToTop() { 
    const [isVisible, setIsVisible] = useState(false); 
    
    useEffect(() => { 
        const toggleVisibility = () => { 
            if (window.scrollY > 300) { 
                setIsVisible(true); 
            } else { 
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);

    }, []); 

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



    return( 
        <div>
            {isVisible && (
                <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-gray-500 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-all"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    />
                </svg>
            </button>
            )}

        </div>
    )
}