import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext } from "../../pages/_app";

const Review = () => {
  const [product, setProduct, productCard, setProductCard] =
    useContext(ProductContext);

  const total = productCard.reduce(
    (total, prd) => total + Number(prd.price),
    0
  );

  const discount = total / 10;
  const grandTotal = total - discount;

  return (
    <div className="mt-5">
      <h4>Order Summary</h4>
      <p>Items Ordered: {productCard.length}</p>
      <p>Product Price: {total}</p>
      <p>Discount 10%: {discount}</p>
      <p>Total price: {grandTotal}</p>
      <br />

      <Link href={"/cart"} passHref>
        <button className="">cart Order</button>
      </Link>
    </div>
  );
};

export default Review;
