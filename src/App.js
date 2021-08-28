import './App.css';
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar  from './components/Navbar/Navbar'

function App() {
  const [product, setProduct] = React.useState(null);

  const getData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => 
        setProduct(data)
        )
      }
      
    React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      { product && <Sidebar product={product} />}
    </div>
  );
}

export default App;

