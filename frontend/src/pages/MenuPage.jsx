import { useState, useEffect, useRef } from 'react'; 
import CategoryList  from '../components/menu/CategoryList';
import MenuNavbar from '../components/menu/MenuNavbar'; 
import CartPage from '../pages/CartPage'
import HomeButton from '../components/HomeButton'



export default function MenuPage() {

  const [menu, setMenu] = useState([]); 
  const sectionRefs = useRef({}); 

  useEffect(() => { 
    const fetchMenuItems = async() => { 
      try { 
        const resp = await fetch('http://localhost:3000/menu'); 
        const data = await resp.json(); // parse to json 
        setMenu(data); 
      } catch (error) { 
        console.error('Error fetching meu items:', err)
      }
    }
    fetchMenuItems(); 
  }, [])

  // Create refs for each category 
  useEffect(() => {
    menu.forEach((category) => {  
      // If category does not have a ref, initialize a ref and set to null
      // Ref initialize acts as placeholder for categories                                                                                                                                                                                                                                                       
        if (!sectionRefs.current[category._id]) {
            sectionRefs.current[category._id] = { current: null };
        }
    });
}, [menu]);


// Uses stored ref to scroll to the corresponding section 
const scrollToSection = (categoryId) => {
    const section = sectionRefs.current[categoryId];
    if (section && section.current) {
        section.current.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
    <>
      <div className="pt-20">  {/* Push content down to avoid overlap */}
        <h1 className="text-4xl font-bold mb-6">Chinatown Restaurant</h1>
        <HomeButton />
        <MenuNavbar menu={menu} onCategoryClick={scrollToSection} />
        <CategoryList menu={menu} sectionRefs={sectionRefs} />
      </div>
    </>

  )
}

