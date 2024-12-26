// iterates thru each menu item and creates their own card 

import MenuCard from './MenuCard'; 


export default function MenuList({ category }) { 
    // Gets description from the first item in each category
    const categoryDescription = category.items[0]?.descriptions?.category || "";

    return (
        <div className='py-1'>
            <h2 className="text-2xl font-bold mb-4 text-left">{category._id}</h2>
            <p className="text-left text-gray-600 mb-4">{categoryDescription}</p> {/* Display description */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
                {category.items.map((item) => ( 
                    <MenuCard key={item._id} item={item} /> 
                ))} 
            </div>
        </div>
    );
};