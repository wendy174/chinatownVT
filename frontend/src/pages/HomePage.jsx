import Welcome from '../components/main/Welcome'; 
import Navbar from '../components/main/Navbar'; 
import AboutUs from '../components/main/AboutUs'; 
import { APIProvider } from "@vis.gl/react-google-maps";
import ContactUs from '../components/main/ContactUs'; 

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
