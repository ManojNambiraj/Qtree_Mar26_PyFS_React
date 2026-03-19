import React from "react";
import img1 from "./assets/images/d1.jpg"

function ProductCard(props) {
  return (
    <div class="card m-2" style={{ width: "18rem" }}>
      <img src={props.product.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.product.pName}</h5>
        <p class="card-text">
          Rs. {props.product.price}
        </p>
        <p class="card-text">
          {props.product.pDesc}
        </p>
        <p>{props.product.isStock === true ? "-in stock" : "-out of stock"}</p>
        <button class="btn btn-primary" disabled={!props.product.isStock} onClick={() => {props.handleAddtoCart(props.product)}}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
