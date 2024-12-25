// iterates thru each menu item and creates their own card 

import MenuCard from './MenuCard'; 

export default function MenuList({ category }) { 
    return (
        <div className='py-1'>
            <h2 className="text-2xl font-bold mb-4 text-left">{category._id}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
                {category.items.map((item) => ( 
                    <MenuCard key={item._id} item={item} /> 
                ))} 
            </div>
        </div>
    );
};

