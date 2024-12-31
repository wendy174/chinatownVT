import { useState, useEffect } from 'react'; 

export default function ScrollToTop() { 
    const [isVisible, setIsVisible] = useState(false); // tracks whether button should appear 
    // Runs after component mounts 
    useEffect(() => { 

        // Controls visibility of button based on current scroll position 
        // toggleVisibility checks to see if user has scrolled down to 300px down 
            // if greater than 300px down make button visible if not make not visible 
        const toggleVisibility = () => { 
            // scrollY is the number of pixels currently scrolled to 
            if (window.scrollY > 300) { 
                setIsVisible(true); 
            } else { 
                setIsVisible(false)
            }
        }

        // listens to scroll event
        // when user scrolls, run the toggleVis function that decides if button shows or not 
        window.addEventListener('scroll', toggleVisibility); 

        // Cleanup --> removes the scroll listener when the componet is removed or updated to prevent memory leaks
            // without this scroll listener would keep running even after the component disappears 
        return () => window.removeEventListener('scroll', toggleVisibility);

    }, []); 



    // When button is clicked function is triggered 
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