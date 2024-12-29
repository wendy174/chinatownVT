import { useState, useEffect } from 'react'; 
// import './App.css'; 
import CategoryList  from '../components/CategoryList';
import MenuNavbar from '../components/MenuNavbar'; 


export default function MenuPage() {

  const [menu, setMenu] = useState([])

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


  return (
    <>
     <h1>Chinatown Application</h1>
     <MenuNavbar menu={menu} />
     <CategoryList menu={menu} />
    </>
  )
}

