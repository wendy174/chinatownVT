import { Input } from "@/components/ui/input"; 
import { useState, useContext } from 'react'; 
import { SearchMenuContext } from '../context/searchMenu-context'; 



export default function SearchBar() { 

    const {searchInput, setSearchInput} = useContext(SearchMenuContext); 

    let handleSearchInput = (e) => { 
        setSearchInput(e.target.value); 
    }


    return ( 
        <div>
            <Input type="search" placeholder="Search Menu" onChange={handleSearchInput}/>
        </div>
    )
}