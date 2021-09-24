const MenuItem = ({id, title, category, price, img, description}) => {

    return (
        <div>
            <img src={`https://react-projects-5-menu.netlify.app/images/item-${id}.jpeg`} alt={img} width="200"/>
            <h1>{title}</h1>
            <h2>{category}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
    )
}

export default MenuItem