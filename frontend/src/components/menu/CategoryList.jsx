import MenuList from "./MenuList"; 


export default function CategoryList({menu, sectionRefs}) { 
    // Creates MenuList for each Category
    
    return ( 
        <div>
            {menu.map((category) => ( 
                // ref points to the div wrapping in each category menuList 
                <MenuList key={category._id} category={category} ref={sectionRefs.current[category._id]} />
            ))}
        </div>
    )

}