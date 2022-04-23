import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ProductList from "../components/product-list";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  // console.log("props: ", props);
  return (
    <div className="container my-5">
      <ProductList />
    </div>
  );
}

// export async function getStaticProps(context) {
//   // const res = await fetch("/api/product");
//   const posts = await res.json();

//   return {
//     props: { posts },
//   };
// }
