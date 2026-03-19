import React, { useState } from "react";
import "./Ecommerce.css";
import img1 from "./assets/images/d1.jpg";
import img2 from "./assets/images/d2.jpg";
import img3 from "./assets/images/d3.jpg";
import ProductCard from "./ProductCard";

const Ecommerce = () => {
  const datas = [
    {
      id: 1,
      pName: "Dessart1",
      pDesc: "Dessart 1 Description",
      price: 100,
      img: img1,
      isStock: true,
    },
    {
      id: 2,
      pName: "Dessart2",
      pDesc: "Dessart 2 Description",
      price: 180,
      img: img2,
      isStock: true,
    },
    {
      id: 3,
      pName: "Dessart3",
      pDesc: "Dessart 3 Description",
      price: 350,
      img: img3,
      isStock: true,
    },
    {
      id: 4,
      pName: "Dessart4",
      pDesc: "Dessart 4 Description",
      price: 220,
      img: img1,
      isStock: false,
    },
    {
      id: 5,
      pName: "Dessart5",
      pDesc: "Dessart 5 Description",
      price: 80,
      img: img2,
      isStock: true,
    },
    {
      id: 6,
      pName: "Dessart6",
      pDesc: "Dessart 6 Description",
      price: 440,
      img: img3,
      isStock: false,
    },
    {
      id: 7,
      pName: "Dessart7",
      pDesc: "Dessart 7 Description",
      price: 40,
      img: img1,
      isStock: true,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddtoCart = (product) => {
    setCartItems([...cartItems, product])
  };

  const handleRemoveFromCart = (item) => {
    const temp = cartItems.filter((cItem) => cItem.id !== item.id)

    setCartItems(temp)
  }
  return (
    <div className="container-fluid mymain">
      <div className="row">
        <div className="col-10 left">
          <h1>Desserts</h1>
          <div className="row m-2">
            {datas.map((product) => {
              return (
                <ProductCard
                  product={product}
                  handleAddtoCart={handleAddtoCart}
                />
              );
            })}
          </div>
        </div>
        <div className="col-2 right">
          <h2>Your Cart ({cartItems.length})</h2>

          <ol class="list-group list-group-numbered">
            {cartItems.map((item) => {
              return (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{item.pName}</div>
                    {item.price}
                  </div>
                  <button class="badge text-bg-primary rounded-pill" onClick={() => handleRemoveFromCart(item)}>x</button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
