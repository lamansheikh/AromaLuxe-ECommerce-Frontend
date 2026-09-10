import React from "react";
import "./HeaderFooter.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";


function Header() {
  const user = JSON.parse(localStorage.getItem("loginuser"));
  const navigate = useNavigate();

  const { cartCount, openCart } = useCart();

  const logout = () => {
    localStorage.removeItem("loginuser");
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 top-contact">
              <span>
                <i className="fa-solid fa-envelope"></i>{" "}
                info@aromaluxe.com
              </span>

              <span className="ms-4">
                <i className="fa-solid fa-phone"></i>{" "}
                +92 300 1234567
              </span>
            </div>

            <div className="col-md-6 text-end social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>

              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg luxury-navbar sticky-top">
        <div className="container">
          <Link className="navbar-brand brand-logo" to="/">
            Aroma<span>Luxe</span>
          </Link>

          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="nav-icons">
              {/* Search */}
              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>

              {/* Wishlist */}
              <a href="#">
                <i className="fa-regular fa-heart"></i>
              </a>

              {/* Shopping Cart */}
              <button
                className="cart-icon-btn"
                onClick={openCart}
                aria-label="Open shopping cart"
              >
                <i className="fa-solid fa-cart-shopping"></i>

                <span className="cart-count">
                  {cartCount}
                </span>
              </button>

              {/* User */}
              {user ? (
                <div className="m-2 dropdown d-inline-block">
                  <button
                    className="btn btn-warning text-dark dropdown-toggle text-uppercase"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    🙂 - {user.fullName}
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login">
                  <i className="fa-regular fa-user"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
