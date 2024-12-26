import MenuList from "./MenuList"; 


export default function CategoryList({menu}) { 
    // Creates MenuList for each Category
    
    return ( 
        <div>
            {menu.map((category) => ( 
                <MenuList key={category._id} category={category} />
            ))}
        </div>
    )

}