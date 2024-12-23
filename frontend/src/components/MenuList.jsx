// iterates thru each menu item and creates their own card 

import { MenuCard } from './MenuCard'; 

export const MenuList = ({category}) => { 
    // console.log(category.items)
    return (
        <>
            {category.items.map((item) => ( 
                <MenuCard key={item._id} item={item} /> 
            ))} 
        </>
    );
};
