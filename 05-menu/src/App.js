import React, { useState } from 'react'
import items from './data'
import Category from './Category'
import Menu from './Menu'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
    } else {
      const newItems = items.filter((item) => item.category === category)
      setMenuItems(newItems)
    }
  }

  return (
    <div>
      <Category categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </div>
  )

}

export default App