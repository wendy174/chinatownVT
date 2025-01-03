import Welcome from '../components/Welcome'; 
import Navbar from '../components/Navbar'; 
import AboutUs from '../components/Aboutus'; 

export default function HomePage() { 
    return ( 
        <div >
            <Navbar />
            <Welcome />
            <AboutUs />
        </div>
    )
}
