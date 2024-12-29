import { useState, useEffect, useRef } from 'react'; 
// import './App.css'; 
import CategoryList  from '../components/CategoryList';
import MenuNavbar from '../components/MenuNavbar'; 


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
        // Directly assign to ref object without calling useRef inside the loop
        if (!sectionRefs.current[category._id]) {
            sectionRefs.current[category._id] = { current: null };
        }
    });
}, [menu]);

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

