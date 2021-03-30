import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ProfilePage from './pages/ProfilePage';
import PantryPage from './pages/PantryPage';
import RecipesPage from './pages/RecipesPage';
import GroceryListPage from './pages/GroceryListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <div>
            
            <Switch>
              <Route exact path="/" component={ ProfilePage } />
              <Route exact path="/pantry" component={ PantryPage } />
              <Route exact path="/recipes" component={ RecipesPage } />
              <Route exact path="/grocery_list" component={ GroceryListPage } />
            </Switch>

          </div>
      </Router>
    </div>
  );
}

export default App;

