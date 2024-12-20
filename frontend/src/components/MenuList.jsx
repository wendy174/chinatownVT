// iterates thru each menu item and creates their own card 

import { MenuCard } from './MenuCard'; 

export const MenuList = ({ menu }) => { 
    return (
        <>
            {menu.map((item) => ( 
                <MenuCard key={item._id} item={item} /> 
            ))} 
        </>
    );
};
