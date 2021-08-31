import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
// import Sidebar from './components/Sidebar/Sidebar'
// import Navbar  from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Main from './components/Main/Main';
import axios from 'axios';

function App() {
  const [items, setItem] = React.useState();
  const [cartItems, setCartItems] = React.useState();

  const getItemData = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products')
    // console.log(data)
    setItem(data) 
  };

  React.useEffect(() => {
    getItemData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
            <Main items={items} setCartItems={setCartItems} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems}  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

