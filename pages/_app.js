import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import Header from "../components/header";

export const ProductContext = createContext();

function MyApp({ Component, pageProps }) {
  const [user, seuser] = useState(null);
  const [product, setProduct] = useState([]);
  const [productCard, setProductCard] = useState([]);
  
  return (
    <ProductContext.Provider
      value={[product, setProduct, productCard, setProductCard, user, seuser]}
    >
      <Header />
      <Component {...pageProps} />
    </ProductContext.Provider>
  );
}

export default MyApp;
