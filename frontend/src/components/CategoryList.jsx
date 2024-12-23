import { Category } from "./Category"; 
import { MenuList } from "./MenuList"; 


export const CategoryList = ({menu}) => { 
    return ( 
        <div>
            {menu.map((category) => ( 
                <Category key={category._id} category={category} />
            ))}
        </div>
    )

}