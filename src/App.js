
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Shop from './components/Shop/Shop';

function App() {
  const [allProducts, setProducts] = useState([]);
  function getProducts() {
    fetch('./fakeData/products.JSON').then(r => r.json()).then(d => setProducts(d));
  }
  useEffect(getProducts, []);

  const [showProducts, setShowProducts] = useState(allProducts);
  useEffect(() => { setShowProducts(allProducts) }, [allProducts]);

  return (
    <div className="container">
      <Header></Header>
      <main>
        <Search allProducts={allProducts} setShowProducts={setShowProducts} />
        <Shop allProducts={allProducts} showProducts={showProducts} />
      </main>
    </div>
  );
}

export default App;
