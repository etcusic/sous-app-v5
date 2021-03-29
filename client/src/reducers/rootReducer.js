import { combineReducers } from 'redux'
import user from './userReducer'
import pantry from './pantryReducer'
import recipes from './recipesReducer'
import menus from './menusReducer'
import groceryLists from './groceryListsReducer'

export default combineReducers({
    user, pantry, recipes, menus, groceryLists
})

