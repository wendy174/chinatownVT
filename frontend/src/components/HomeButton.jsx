import { HomeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate();

    const handleNavHome = () => {
        navigate('/');
    };

    return (
        <div className="fixed top-4 left-4">
            <button
                onClick={handleNavHome}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition duration-200"
            >
                <HomeIcon className="w-6 h-6 text-gray-800" />
            </button>
        </div>
    );
}
