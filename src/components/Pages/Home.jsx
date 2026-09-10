import React from "react";
import "./Home.css";
import { useCart } from "../../context/CartContext";


function Home() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "Royal Oud Premium Men's Fragrance Collection",
      price: "Rs. 2500.00",
      description:
        "A rich and luxurious oud fragrance created for a sophisticated and confident personality.",
      image:
        "https://www.junaidjamshed.com/cdn/shop/files/gold_1_02e43d2c-4eee-4278-acd5-55fd72237af1.jpg?v=1776978926&width=1100",
    },

    {
      id: 2,
      title: "Midnight Essence Luxury Perfume For Men",
      price: "Rs. 2500.00",
      description:
        "A mysterious and elegant fragrance with deep notes designed for evening occasions.",
      image:
        "https://www.junaidjamshed.com/cdn/shop/files/502_2__3_e4992cb8-8698-4391-b162-a2f2832d6226.jpg?v=1776978926&width=1130",
    },

    {
      id: 3,
      title: "Bold Signature Long Lasting Men's Scent",
      price: "Rs. 2500.00",
      description:
        "A bold signature scent with a long-lasting aroma for everyday confidence.",
      image:
        "https://picsum.photos/400/500?random=13",
    },

    {
      id: 4,
      title: "Elite Noir Exclusive Fragrance For Men",
      price: "Rs. 2500.00",
      description:
        "An exclusive masculine fragrance combining elegance, warmth and modern sophistication.",
      image:
        "https://picsum.photos/400/500?random=14",
    },

    {
      id: 5,
      title: "Blooming Rose Elegant Women's Perfume",
      price: "Rs. 2500.00",
      description:
        "A graceful floral fragrance inspired by fresh blooming roses and feminine elegance.",
      image:
        "https://picsum.photos/400/500?random=15",
    },

    {
      id: 6,
      title: "Golden Petals Luxury Fragrance For Women",
      price: "Rs. 2500.00",
      description:
        "A luxurious floral scent with warm golden notes and a beautifully elegant finish.",
      image:
        "https://picsum.photos/400/500?random=16",
    },

    {
      id: 7,
      title: "Velvet Blossom Premium Women's Collection",
      price: "Rs. 2500.00",
      description:
        "A soft and sophisticated fragrance collection featuring delicate floral notes.",
      image:
        "https://picsum.photos/400/500?random=17",
    },

    {
      id: 8,
      title: "Crystal Bloom Long Lasting Women's Scent",
      price: "Rs. 2500.00",
      description:
        "A refreshing and radiant women's fragrance designed to leave a memorable impression.",
      image:
        "https://picsum.photos/400/500?random=18",
    },
  ];

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

          <div className="row g-4">
            {products.map((product) => (
              <div
                className="col-lg-3 col-md-6"
                key={product.id}
              >
                <div className="product-card">
                  <div className="image-wrapper">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                    />

                    <button className="wishlist-btn">
                      <i className="fa-regular fa-heart"></i>
                    </button>
                  </div>

                  <div className="product-info">
                    <h5>{product.title}</h5>

                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>

                      <span>(5.0)</span>
                    </div>

                    <div className="price">
                      {product.price}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
