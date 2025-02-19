import Welcome from '../components/main/Welcome'; 
import MainPageNavbar from '../components/main/MainPageNavbar'; 
import AboutUs from '../components/main/AboutUs'; 
import { APIProvider } from "@vis.gl/react-google-maps";
import ContactUs from '../components/main/ContactUs'; 
import Login from '../components/Login'; 

export default function HomePage() { 

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; 

    return ( 
        <div >
            <Login />
            <MainPageNavbar />
            <Welcome />
            <AboutUs />
            <APIProvider apiKey={apiKey}>
              <ContactUs />
            </APIProvider>
        </div>
    )
}
