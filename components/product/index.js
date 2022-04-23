import React from "react";
import Image from "next/image";

const Product = ({ product, handleAddProduct }) => {
  const { image_url, price, title, description } = product;
  return (
    <>
      <div className="col-3">
        <div className="card text-center my-5" style={{ height: "20rem" }}>
          <Image
            className="card-img-top"
            width={100}
            height={200}
            src={image_url}
            alt="product image"
          />
          <div className="card-body">
            <p className="card-title">
              <h5 className="">{title}</h5>
            </p>
            <p className="card-text">select weight 350g</p>
            <h4>
              <i className="">{price}</i>
            </h4>
            <button className="btn btn-outline-secondary px-4" onClick={() => handleAddProduct(product)}>
              {/* <FontAwesomeIcon icon={faShoppingCart} />  */}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
