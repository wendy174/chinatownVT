import { useState, useEffect, useRef } from 'react'; 
// import './App.css'; 
import CategoryList  from '../components/CategoryList';
import MenuNavbar from '../components/MenuNavbar'; 

// Visual breakdown of category click triggers smooth scrolling to correspoding section 
  // User clicks on category in menubar 
  // Triggers scrollToSection 
  //  sectionRefs.current['appetizers'] points to the MenuList
  // scrollIntoView


export default function MenuPage() {

  const [menu, setMenu] = useState([]); 
  const sectionRefs = useRef({}); 
//   sectionRefs.current = {
//   appetizers: <div> DOM node,
//   main: <div> DOM node,
//   desserts: <div> DOM node
// }
// sectionRefs.current[categoryId] fetches the dom elements corresponding to the section 

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
// Function is passed down to MenuNavbar as onCategoryClick 
// scrollIntoView is build in dom methods that scrolls the target element into viewpoint 
const scrollToSection = (categoryId) => {
    const section = sectionRefs.current[categoryId];
    if (section && section.current) {
        section.current.scrollIntoView({ behavior: 'smooth' });
    }
};


  return (
    <>
     <h1>Chinatown Application</h1>
     <MenuNavbar menu={menu} onCategoryClick={scrollToSection} />
     <CategoryList menu={menu} sectionRefs={sectionRefs} />
    </>
  )
}

