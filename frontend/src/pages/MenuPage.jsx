import { useState, useEffect, useRef } from 'react'; 
import CategoryList from '../components/menu/CategoryList';
import MenuNavbar from '../components/menu/MenuNavbar'; 
import HomeButton from '../components/HomeButton';

export default function MenuPage() {
  const [menu, setMenu] = useState([]); 
  const sectionRefs = useRef({}); 

  useEffect(() => { 
    const fetchMenuItems = async () => { 
      try { 
        const resp = await fetch('http://localhost:3000/menu'); 
        const data = await resp.json();
        setMenu(data); 
      } catch (error) { 
        console.error('Error fetching menu items:', error);
      }
    };
    fetchMenuItems(); 
  }, []);

  // Create refs for each category 
  useEffect(() => {
    menu.forEach((category) => {  
      if (!sectionRefs.current[category._id]) {
        sectionRefs.current[category._id] = { current: null };
      }
    });
  }, [menu]);

  // Scroll to corresponding section
  const scrollToSection = (categoryId) => {
    const section = sectionRefs.current[categoryId];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Centered MenuNavbar */}
      <div className="flex justify-center mb-4">
        <MenuNavbar menu={menu} onCategoryClick={scrollToSection} />
      </div>

      {/* Category List */}
      <CategoryList menu={menu} sectionRefs={sectionRefs} />
    </div>
  );
}


