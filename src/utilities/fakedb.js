
const addToDB = (product, cart, setCart) => {
  const newCart = [...cart, product]
  setCart(newCart);

  const productKeys = newCart.map(product => product.key);
  let DB = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : {};

  productKeys.forEach(key => {
    DB[key] = productKeys.filter(k => k === key).length;
  });

  localStorage.setItem('shopping-cart', (JSON.stringify(DB)));
}

const getFromDB = allProducts => {
  const dbJSON = localStorage.getItem('shopping-cart');
  let cartItems = [];
  if (dbJSON === null) {
    return cartItems;
  }
  else if (allProducts.length > 0) {
    const DB = JSON.parse(dbJSON);
    const keys = Object.keys(DB);
    for (const key of keys) {
      const product = allProducts.find(product => product.key === key);
      for (let i = 1; i <= DB[key]; i++) {
        cartItems.push(product);
      }
    }
  }
  return cartItems;
}

export { addToDB, getFromDB };