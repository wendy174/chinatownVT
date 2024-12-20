const MenuCard = ({menu_id, price, description, isSpicy, name}) => { 
    return ( 
        <div className= 'menu-card'>
            <h3>{menu_id}:{name}</h3>
            <p>{price.default}</p>
            <p>{description}</p>
            {isSpicy && <span className="spicy-tag">🌶️ Spicy</span>}
        </div>
    )
}