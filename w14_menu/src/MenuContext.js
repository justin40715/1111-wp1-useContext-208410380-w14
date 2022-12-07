import  React,{ useState, useContext} from 'react';
import Category_80 from './components/Category_80';
import Menu_80 from './components/Menu_80';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '80'];
const MenuContext_80 = React.createContext();

const MenuContext = ({children}) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories]= useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter( (item) => item.category === category);
      setMenuItems(newItems);
    }
  }
  console.log('menuItems', menuItems);

  return (
    <MenuContext_80.Provider
        value={{menuItems, categories,filterItems}}>
          {children}
    </MenuContext_80.Provider>
  )
}
  const useMenuContext_80 = () => {
    return useContext(MenuContext)
  }

  export {MenuContext, useMenuContext_80};