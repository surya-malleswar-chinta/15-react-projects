const Category = ({categories, filterItems}) => {

    return (
        <div>
            {categories.map((category) => {
            return <button key={category} onClick={() => filterItems(category)}> {category}</button>}
            )}
        </div>
    )
}

export default Category