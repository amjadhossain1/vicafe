import React, { useContext } from "react";
import Image from "next/image";
import { ProductContext } from "../../pages/_app";

const OrderCart = ({ productAdd }) => {
  const [product, setProduct, productCard, setProductCard] =
    useContext(ProductContext);
  const { image_url, price, title, product_id } = productAdd;

  const removeProduct = (product_id) => {
    // console.log(product);
    const newCart = productCard.filter((pd) => pd.product_id !== product_id);
    setProductCard(newCart);
  };

  console.log(productAdd);
  return (
    <div>
      {" "}
      <div className="card my-5">
        <div className="card-body row">
          <div className="col-2">
            <Image
              width={100}
              height={100}
              src={image_url}
              alt="product image"
            />
          </div>
          <div className="col-4">
            <div className="">
              <h5 className="">{title}</h5>
              <p className="">350g | French Expresse</p>
            </div>
          </div>
          <div className="col-3">
            <h2>
              <i className="">{price}</i>
            </h2>
          </div>
          <div className="col-2">
            <div className="">
              <span className="mx-3">-</span>1<span className="mx-3">+</span>
            </div>
          </div>
          <div className="col-1">
            <button onClick={() => removeProduct(product_id)} className="btn">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
