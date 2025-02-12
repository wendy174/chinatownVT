import { Input } from "@/components/ui/input"; 
import { useContext } from 'react'; 
import { SearchMenuContext } from '../context/searchMenu-context'; 



export default function SearchBar() { 

    const { setSearchInput } = useContext(SearchMenuContext); 

    let handleSearchInput = (e) => { 
        setSearchInput(e.target.value); 
    }

    return ( 
        <div>
            <Input type="search" placeholder="Search Menu" onChange={handleSearchInput}/>
        </div>
    )
}