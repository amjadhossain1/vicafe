import React, { useContext } from "react";
import OrderCart from "../../components/order-cart";
import Review from "../../components/review";
import { ProductContext } from "../_app";

const Cart = () => {
  const [product, setProduct, productCard, setProductCard] =
    useContext(ProductContext);

  //   console.log("context: ", product, setProduct, productCard, setProductCard);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {productCard.map((product) => (
            <OrderCart key={product.product_id} productAdd={product} />
          ))}
        </div>
        <div className="col-4">
          {" "}
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Cart;
