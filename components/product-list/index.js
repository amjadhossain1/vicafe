import React, { useContext } from "react";
import { useState } from "react";
import localData from "../../demoData";
import { ProductContext } from "../../pages/_app";
import Product from "../product";
import Review from "../review";

const ProductList = (props) => {
  const [data, setData] = useState(localData);

  const [product, setProduct, productCard, setProductCard] =
    useContext(ProductContext);

  const handleAddProduct = (product) => {
    let newCart = [...productCard, product];
    setProductCard(newCart);
  };

  console.log("props: ", props);

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            {data.slice(0, 4).map((product) => (
              <Product
                key={product.product_id}
                product={product}
                handleAddProduct={handleAddProduct}
              />
            ))}
          </div>
        </div>

        <div className="col-4">
          {" "}
          <Review />
        </div>
      </div>
    </div>
  );
};

export default ProductList;


