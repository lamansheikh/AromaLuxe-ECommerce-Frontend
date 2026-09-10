import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <main className="checkout-page">
      <div className="container py-5">

        {/* Page Header */}
        <div className="checkout-header mb-4">
          <h1 className="checkout-title">Checkout</h1>
          <p className="checkout-subtitle">
            Complete your order securely and easily.
          </p>
        </div>

        {/* Checkout Steps */}
        <div className="checkout-steps mb-5">
          <div className="checkout-step active">
            <span className="step-number">1</span>
            <div>
              <small>Step 1</small>
              <strong>Information</strong>
            </div>
          </div>

          <div className="step-line"></div>

          <div className="checkout-step">
            <span className="step-number">2</span>
            <div>
              <small>Step 2</small>
              <strong>Payment</strong>
            </div>
          </div>

          <div className="step-line"></div>

          <div className="checkout-step">
            <span className="step-number">3</span>
            <div>
              <small>Step 3</small>
              <strong>Confirmation</strong>
            </div>
          </div>
        </div>

        <div className="row g-4">

          {/* Left Side */}
          <div className="col-lg-8">

            {/* Contact Information */}
            <section className="checkout-card mb-4">
              <div className="section-heading">
                <div className="section-icon">
                  <i className="bi bi-person"></i>
                </div>

                <div>
                  <h3>Contact Information</h3>
                  <p>We'll use this information to contact you about your order.</p>
                </div>
              </div>

              <div className="row g-3">

                <div className="col-md-6">
                  <label className="form-label">
                    First Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control checkout-input"
                    placeholder="Enter first name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control checkout-input"
                    placeholder="Enter last name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control checkout-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control checkout-input"
                    placeholder="+92 300 0000000"
                  />
                </div>

              </div>
            </section>

            {/* Shipping Address */}
            <section className="checkout-card mb-4">

              <div className="section-heading">
                <div className="section-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div>
                  <h3>Shipping Address</h3>
                  <p>Where should we deliver your order?</p>
                </div>
              </div>

              <div className="row g-3">

                <div className="col-12">
                  <label className="form-label">
                    Address <span>*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control checkout-input"
                    placeholder="Street address"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    City <span>*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control checkout-input"
                    placeholder="Enter city"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    State / Province
                  </label>

                  <input
                    type="text"
                    className="form-control checkout-input"
                    placeholder="Enter state"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    className="form-control checkout-input"
                    placeholder="Postal code"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Country <span>*</span>
                  </label>

                  <select className="form-select checkout-input">
                    <option>Select country</option>
                    <option>Pakistan</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                  </select>
                </div>

                <div className="col-12">
                  <div className="form-check custom-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="saveAddress"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="saveAddress"
                    >
                      Save this address for future orders
                    </label>
                  </div>
                </div>

              </div>
            </section>

            {/* Delivery */}
            <section className="checkout-card mb-4">

              <div className="section-heading">
                <div className="section-icon">
                  <i className="bi bi-truck"></i>
                </div>

                <div>
                  <h3>Delivery Method</h3>
                  <p>Select your preferred delivery option.</p>
                </div>
              </div>

              <div className="delivery-options">

                <label className="delivery-option selected">
                  <input
                    type="radio"
                    name="delivery"
                    defaultChecked
                  />

                  <div className="delivery-content">
                    <div className="delivery-icon">
                      <i className="bi bi-box-seam"></i>
                    </div>

                    <div>
                      <strong>Standard Delivery</strong>
                      <small>Delivery within 3–5 business days</small>
                    </div>
                  </div>

                  <strong className="delivery-price">Free</strong>
                </label>

                <label className="delivery-option">
                  <input
                    type="radio"
                    name="delivery"
                  />

                  <div className="delivery-content">
                    <div className="delivery-icon">
                      <i className="bi bi-lightning"></i>
                    </div>

                    <div>
                      <strong>Express Delivery</strong>
                      <small>Delivery within 1–2 business days</small>
                    </div>
                  </div>

                  <strong className="delivery-price">$12.00</strong>
                </label>

              </div>
            </section>

            {/* Payment */}
            <section className="checkout-card">

              <div className="section-heading">
                <div className="section-icon">
                  <i className="bi bi-credit-card"></i>
                </div>

                <div>
                  <h3>Payment Method</h3>
                  <p>Your payment information is secure and encrypted.</p>
                </div>
              </div>

              <div className="payment-methods">

                <label className="payment-method active">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />

                  <div className="payment-method-content">
                    <div>
                      <strong>Credit / Debit Card</strong>
                      <small>Visa, Mastercard, American Express</small>
                    </div>

                    <div className="card-brands">
                      <span>VISA</span>
                      <span>MC</span>
                    </div>
                  </div>
                </label>

                <label className="payment-method">
                  <input
                    type="radio"
                    name="payment"
                  />

                  <div className="payment-method-content">
                    <div>
                      <strong>Cash on Delivery</strong>
                      <small>Pay when your order arrives</small>
                    </div>

                    <i className="bi bi-cash-stack payment-icon"></i>
                  </div>
                </label>

              </div>

              {/* Card Fields */}
              <div className="card-details mt-4">

                <div className="mb-3">
                  <label className="form-label">
                    Card Number
                  </label>

                  <div className="input-with-icon">
                    <i className="bi bi-credit-card"></i>

                    <input
                      type="text"
                      className="form-control checkout-input"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </div>

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">
                      Expiry Date
                    </label>

                    <input
                      type="text"
                      className="form-control checkout-input"
                      placeholder="MM / YY"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      CVV
                    </label>

                    <input
                      type="text"
                      className="form-control checkout-input"
                      placeholder="123"
                    />
                  </div>

                </div>

              </div>

              <div className="secure-payment mt-4">
                <i className="bi bi-shield-check"></i>

                <div>
                  <strong>Secure Payment</strong>
                  <p>Your payment details are protected with secure encryption.</p>
                </div>
              </div>

            </section>

          </div>

          {/* Right Side */}
          <div className="col-lg-4">

            <div className="order-summary">

              <div className="summary-header">
                <div>
                  <h3>Order Summary</h3>
                  <p>3 items in your cart</p>
                </div>

                <span className="item-count">3</span>
              </div>

              {/* Product */}
              <div className="summary-product">

                <div className="product-image">
                  <div className="product-placeholder">
                    Product
                  </div>

                  <span className="product-quantity">1</span>
                </div>

                <div className="product-info">
                  <h4>Premium Product</h4>
                  <small>Black / Medium</small>
                  <strong>$89.00</strong>
                </div>

              </div>

              <div className="summary-product">

                <div className="product-image">
                  <div className="product-placeholder">
                    Product
                  </div>

                  <span className="product-quantity">2</span>
                </div>

                <div className="product-info">
                  <h4>Classic Product</h4>
                  <small>White / Large</small>
                  <strong>$120.00</strong>
                </div>

              </div>

              {/* Promo */}
              <div className="promo-section">

                <label>Have a promo code?</label>

                <div className="promo-input">
                  <input
                    type="text"
                    placeholder="Enter code"
                  />

                  <button type="button">
                    Apply
                  </button>
                </div>

              </div>

              {/* Totals */}
              <div className="summary-details">

                <div>
                  <span>Subtotal</span>
                  <strong>$209.00</strong>
                </div>

                <div>
                  <span>Shipping</span>
                  <strong>Free</strong>
                </div>

                <div>
                  <span>Tax</span>
                  <strong>$20.90</strong>
                </div>

              </div>

              <div className="summary-total">

                <span>Total</span>

                <div>
                  <strong>$229.90</strong>
                  <small>USD</small>
                </div>

              </div>

              <button
                type="button"
                className="place-order-btn"
              >
                Place Order
                <i className="bi bi-arrow-right"></i>
              </button>

              <div className="order-note">
                <i className="bi bi-lock"></i>
                <span>Your order is secure and protected.</span>
              </div>

            </div>

            {/* Help */}
            <div className="checkout-help">

              <div className="help-icon">
                <i className="bi bi-headset"></i>
              </div>

              <div>
                <h4>Need Help?</h4>
                <p>Our support team is here to assist you.</p>
                <a href="#support">Contact Support</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
};

export default Checkout;
