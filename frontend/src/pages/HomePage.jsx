import Welcome from '../components/Welcome'; 
import Navbar from '../components/Navbar'; 
import AboutUs from '../components/AboutUs'; 
import { APIProvider } from "@vis.gl/react-google-maps";
import ContactUs from '../components/ContactUs'; 

export default function HomePage() { 

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; 

    return ( 
        <div >
            <Navbar />
            <Welcome />
            <AboutUs />
            <APIProvider apiKey={apiKey}>
              <ContactUs />
            </APIProvider>
        </div>
    )
}
