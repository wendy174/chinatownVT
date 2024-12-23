import { MenuList } from "./MenuList"

export const Category = ({category}) => { 
    console.log(category)
    return ( 
        <>
            <h2 style={{ fontWeight: 'bold' }}>{category._id}</h2>
            <MenuList category={category}/>
        </>
    )
}