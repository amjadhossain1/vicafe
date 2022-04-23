import React, { useContext } from "react";
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ProductContext } from "../_app";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [product, setProduct, productCard, setProductCard, user, setUser] =
    useContext(ProductContext);

  //   console.log("user: ", user);

  const SignIn = () => {
    var provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        console.log("user: ", user);
      })
      .catch((error) => {
        console.log("error: ", error.message);

        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <button className="btn btn-outline-primary px-5" onClick={SignIn}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
