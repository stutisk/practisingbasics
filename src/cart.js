import React, { useState } from "react";

export default function Cart() {
  const [cartlist, setcartlist] = useState([]);

  const addProductToCart = (product) => {
    console.log("sk");
    setcartlist((cartlist) => [...cartlist, { ...product }]);
  };
  // making
  const products = [
    {
      name: "tea",
      price: 50
    },
    {
      name: "coffee",
      price: 100
    }
  ];

  return (
    <div className="App">
      <h1>my products</h1>
      {products.map((product) => (
        <>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => addProductToCart(product)}>
            Add to cart{" "}
          </button>
          <hr />
        </>
      ))}
      <h1>My Cart</h1>
      <ul>
        {cartlist.map(({ name, price }) => (
          <li key="id">
            {name} {price}
          </li>
        ))}
      </ul>
    </div>
  );
}
