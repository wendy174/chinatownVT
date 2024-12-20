// used to display a single menu item 

export const MenuCard = ({item}) => { 
    return ( 
        <div className= 'menu-card'>
        <ul>
            <h3>{item.menu_id}:{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            {item.isSpicy && <span className="spicy-tag">🌶️ Spicy</span>}
        </ul>
       
        </div>
    )
}