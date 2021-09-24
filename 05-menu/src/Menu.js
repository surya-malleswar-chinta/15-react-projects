import MenuItem from "./MenuItem"

const Menu = ({items}) => {

    return (
        <div>
           {items.map((item) => <MenuItem key={item.id} {...item}/>)}
        </div>
    )
}

export default Menu