import React, { useContext } from "react";
import { ProductContext } from "../../pages/_app";
import Link from "next/link";

const Header = () => {
  const [product, setProduct, productCard, setProductCard, user, setUser] =
    useContext(ProductContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-decoration-none" href="/" passHref>
            <h2> Vicafe</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link px-4" aria-current="page" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="#">
                  Espresso bars
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4">for the office</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4">ViAcademy</a>
              </li>

              <li className="nav-item">
                <a className="nav-link px-4">About us</a>
              </li>
            </ul>
            <Link href="/login" passHref>
              {user ? <p>{user.email}</p> : <button>Sign In</button>}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
