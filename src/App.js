import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
// import Sidebar from './components/Sidebar/Sidebar'
// import Navbar  from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Main from './components/Main/Main';

function App() {
  const [items, setItem] = React.useState();

  const getItemData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        // console.log(data)
      });
  };

  React.useEffect(() => {
    getItemData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
            <Main items={items} />
        </Route>
        <Route path="/cart">
          <Cart items={items} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

