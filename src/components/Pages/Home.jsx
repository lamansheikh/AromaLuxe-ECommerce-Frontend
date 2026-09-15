import React, { useEffect, useState } from "react";
import "./Home.css";
import { useCart } from "../../context/CartContext";

function Home() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://inside-dev.com/api/fragrance")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        // Supports APIs that return products directly
        // or inside a "data" property.
        const productList = Array.isArray(data)
          ? data
          : data.data || data.products || [];

        setProducts(productList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Unable to load products.");
        setLoading(false);
      });
  }, []);

  const formatPrice = (price) => {
    const number = Number(price);

    if (isNaN(number)) {
      return `Rs. ${price}`;
    }

    return `Rs. ${number.toLocaleString("en-PK")}`;
  };

  const renderStars = (rating) => {
    const roundedRating = Math.round(Number(rating) || 0);

    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={
          index < roundedRating
            ? "fa-solid fa-star"
            : "fa-regular fa-star"
        }
      ></i>
    ));
  };

  const getDescription = (description) => {
    if (!description) return "";

    // CSS will limit this to exactly 2 lines visually.
    return description;
  };

  return (
    <>
      {/* ================= CAROUSEL ================= */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/Perfume-4.jpg"
              className="d-block w-100"
              alt="Men's Fragrance"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/images/Perfume-2.jpg"
              className="d-block w-100"
              alt="Women's Fragrance"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/images/Perfume-3.jpg"
              className="d-block w-100"
              alt="Luxury Perfume"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Previous
          </span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Next
          </span>
        </button>
      </div>

      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="featured-products py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Featured Products
          </h2>

          {loading && (
            <div className="text-center py-5">
              <div
                className="spinner-border"
                role="status"
              >
                <span className="visually-hidden">
                  Loading...
                </span>
              </div>
            </div>
          )}

          {error && (
            <div className="alert alert-danger text-center">
              {error}
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <p className="text-center">
              No products found.
            </p>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="row g-4">
              {products.slice(0, 4).map((product) => {
                const rating = Number(
                  product.rating || product.rate || 0
                );

                const ratingCount =
                  product.rating_count ||
                  product.review_count ||
                  product.reviews_count ||
                  product.count ||
                  0;

                return (
                  <div
                    className="col-lg-3 col-md-6"
                    key={product.id}
                  >
                    <div className="product-card">
                      <div className="image-wrapper">
                        <img
                          src={
                            product.image ||
                            product.image_url ||
                            product.thumbnail
                          }
                          alt={product.title || product.name}
                          className="img-fluid"
                        />

                        <button
                          className="wishlist-btn"
                          type="button"
                        >
                          <i className="fa-regular fa-heart"></i>
                        </button>
                      </div>

                      <div className="product-info">
                        <h5>
                          {(product.title || product.name || "").toUpperCase()}
                        </h5>

                        <p className="product-description">
                          {getDescription(product.description)}
                        </p>

                        <div className="rating">
                          {renderStars(product.rating.rate)}

                          <span>
                            ({product.rating.count})
                          </span>
                        </div>

                        <div className="price">
                          {formatPrice(
                            product.price ||
                              product.sale_price ||
                              product.amount
                          )}
                        </div>

                        <button
                          className="cart-btn"
                          onClick={() => addToCart(product)}
                        >
                          <i className="fa-solid fa-cart-shopping me-2"></i>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
