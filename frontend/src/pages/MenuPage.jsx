import { useState, useEffect, useRef, useContext } from 'react'; 
import CategoryList from '../components/menu/CategoryList';
import MenuNavbar from '../components/menu/MenuNavbar'; 
import { SearchMenuContext } from '../context/searchMenu-context'; 

export default function MenuPage() {

  const [menu, setMenu] = useState([]); 

  const sectionRefs = useRef({}); 

  const { searchInput } = useContext(SearchMenuContext); 


  // Fetch menu items 
  useEffect(() => { 
    const fetchMenuItems = async () => { 
      try {
        const resp = await fetch(`http://${window.location.hostname}:4000/menu`); 
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

  // Filter search 
    let filterMenu2 = [];
    if(searchInput.length > 0) { // If search input
      menu.map((aCategory) => { // Iterate over category 

        // Iterate over each item in the category 
        const filterItems = aCategory.items.filter((anItem) => anItem.name.toLowerCase().includes(searchInput));

        console.log(`filterItems` + {filterItems})

        if(filterItems.length > 0) {
          filterMenu2.push({
            '_id': aCategory['_id'],
            items: filterItems
          })
        }
      });
    } else {
      filterMenu2 = menu;
    }
    
  const filteredMenu =  filterMenu2; 

  return (
    <div >
      {/* Centered MenuNavbar */}
      <div className="flex justify-center mb-4">
        <MenuNavbar menu={menu} onCategoryClick={scrollToSection} />
      </div>

      {/* Category List */}
      <CategoryList menu={filteredMenu} sectionRefs={sectionRefs} />
    </div>
  );
}


