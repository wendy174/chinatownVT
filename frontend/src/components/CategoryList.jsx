import { MenuList } from "./MenuList"; 


export const CategoryList = ({menu}) => { 
    return ( 
        <div>
            {menu.map((category) => ( 
                <MenuList key={category._id} category={category} />
            ))}
        </div>
    )

}