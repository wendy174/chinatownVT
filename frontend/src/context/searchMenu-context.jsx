import { createContext, useState } from "react"; 
export const SearchMenuContext = createContext(null); 

export default function SearchMenuContextProvider(props) { 
    // Global state for search menu 
    
    const [searchInput, setSearchInput] = useState(""); 

    const contextValue = {searchInput, setSearchInput}; 

    return ( 
        <SearchMenuContext.Provider value={contextValue} >
            {props.children}
        </SearchMenuContext.Provider> 
    )




}