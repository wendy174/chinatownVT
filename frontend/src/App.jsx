import { useState, useEffect } from 'react'; 
import { MenuList } from './components/MenuList'; 
import './App.css'; 

function App() {

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
     <MenuList menu={menu} />
    </>
  )
}

export default App
