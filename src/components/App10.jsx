import React, { useState } from "react";
import "./App10.css";

const appleImg = "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce";
const mangoImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjG-19CTFIEd_FuauH8y4A1S2cZugQges4g&s";

export default function App10() {
  const [products] = useState([
    { id: 1, name: "Apples", price: 23 },
    { id: 2, name: "Mangoes", price: 45 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div className="app10-container">
      <h2 className="app10-title">Products</h2>
      <div className="app10-products">
        {products.map((product) => (
          <div className="app10-product" key={product.id}>
            <img
              className="app10-product-img"
              src={product.name === "Apples" ? appleImg : mangoImg}
              alt={product.name}
            />
            <div className="app10-product-info">
              <span className="app10-product-name">{product.name}</span>
              <span className="app10-product-price">${product.price}</span>
            </div>
            <button onClick={() => addToCart(product)}>Add</button>
          </div>
        ))}
      </div>

      <hr />

      <h2 className="app10-title">My Cart</h2>
      <div className="app10-cart">
        {cart.length === 0 && <p className="app10-cart-empty">Cart is empty.</p>}
        {cart.map((item) => (
          <div className="app10-cart-item" key={item.id}>
            <img
              className="app10-product-img"
              src={item.name === "Apples" ? appleImg : mangoImg}
              alt={item.name}
            />
            <div className="app10-product-info">
              <span className="app10-product-name">{item.name}</span>
              <span className="app10-product-price">${item.price}</span>
            </div>
            <button onClick={() => decrement(item.id)}>-</button>
            <span style={{ margin: "0 8px" }}>{item.qty}</span>
            <button onClick={() => increment(item.id)}>+</button>
            <span className="app10-product-price" style={{ marginLeft: 16 }}>
              ${item.price * item.qty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}