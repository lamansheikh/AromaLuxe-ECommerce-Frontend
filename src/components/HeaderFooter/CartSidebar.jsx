import React from "react";
import "./CartSidebar.css";
import { useCart } from "../../context/CartContext";


function CartSidebar() {
  

  const {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      {/* Dark Overlay */}
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={closeCart}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`cart-sidebar ${isCartOpen ? "cart-sidebar-open" : ""
          }`}
      >
        {/* Header */}
        <div className="cart-sidebar-header">
          <div>
            <h3>Your Cart</h3>

            <span>
              {cartCount}{" "}
              {cartCount === 1 ? "Item" : "Items"}
            </span>
          </div>

          <button
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Products */}
        <div className="cart-sidebar-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fa-solid fa-cart-shopping"></i>

              <h4>Your Cart Is Empty</h4>

              <p>
                Add some beautiful fragrances to your cart.
              </p>

              <button
                className="continue-shopping-btn"
                onClick={closeCart}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-products">
              {cartItems.map((product) => {
                const productPrice = product.price || 0;

                const itemTotal =
                  productPrice * product.quantity;

                return (
                  <div
                    className="cart-product"
                    key={product.id}
                  >
                    {/* Image */}
                    <div className="cart-product-image">
                      <img
                        src={product.image}
                        alt={product.title}
                      />
                    </div>

                    {/* Details */}
                    <div className="cart-product-details">
                      <div className="cart-product-top">
                        <h5>{product.title}</h5>

                        <button
                          className="delete-cart-btn"
                          onClick={() =>
                            removeFromCart(product.id)
                          }
                          aria-label="Delete product"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>

                      <p className="cart-description">
                        {product.description ||
                          "Premium luxury fragrance with a long-lasting elegant scent."}
                      </p>

                      <div className="cart-product-bottom">
                        {/* Product Price */}
                        <strong>
                          Rs.{" "}
                          {productPrice.toLocaleString()}
                        </strong>

                        {/* Quantity */}
                        <div className="quantity-box">
                          <button
                            onClick={() =>
                              decreaseQuantity(product.id)
                            }
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>

                          <span>{product.quantity}</span>

                          <button
                            onClick={() =>
                              increaseQuantity(product.id)
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="cart-item-total">
                        Item Total: Rs.{" "}
                        {itemTotal.toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>

              <strong>
                Rs.{" "}
                {Number(cartTotal).toLocaleString()}
              </strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() =>
                window.location.href = "/checkout"
              }
            >
              Proceed To Checkout

              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
