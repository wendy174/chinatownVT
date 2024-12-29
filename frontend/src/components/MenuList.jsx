import { forwardRef } from 'react';
import MenuCard from './MenuCard';

const MenuList = forwardRef(({ category }, ref) => {
    const categoryDescription = category.items[0]?.descriptions?.category || "";

    return (
        <div ref={ref} className='py-1'>  {/* Attach ref to outer div */}
            <h2 className="text-2xl font-bold mb-4 text-left">{category._id}</h2>
            <p className="text-left text-gray-600 mb-4">{categoryDescription}</p>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>
                {category.items.map((item) => (
                    <MenuCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
});

export default MenuList;

