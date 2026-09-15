import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();


// Convert price into a number
const getNumericPrice = (price) => {
  if (typeof price === "number") {
    return price;
  }

  if (typeof price === "string") {
    const cleanedPrice = price
      .replace(/Rs\.?/gi, "")
      .replace(/,/g, "")
      .trim();

    const numericPrice = parseFloat(cleanedPrice);

    return Number.isFinite(numericPrice)
      ? numericPrice
      : 0;
  }

  return 0;
};


export const CartProvider = ({ children }) => {

  // Load cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");

      if (!savedCart) {
        return [];
      }

      const parsedCart = JSON.parse(savedCart);

      if (!Array.isArray(parsedCart)) {
        return [];
      }

      return parsedCart.map((item) => ({
        ...item,
        price: getNumericPrice(item.price),
        quantity: Number(item.quantity) || 1,
      }));

    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });


  const [isCartOpen, setIsCartOpen] = useState(false);


  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);


  // Add product
  const addToCart = (product) => {
    setCartItems((previousItems) => {

      const existingProduct = previousItems.find(
        (item) => item.id === product.id
      );


      // Product already exists
      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  Number(item.quantity || 0) + 1,
              }
            : item
        );
      }


      // New product
      return [
        ...previousItems,
        {
          ...product,
          price: getNumericPrice(product.price),
          quantity: 1,
        },
      ];
    });


    // Open sidebar
    setIsCartOpen(true);
  };


  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                Number(item.quantity || 0) + 1,
            }
          : item
      )
    );
  };


  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  Number(item.quantity || 0) - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  // Remove product
  const removeFromCart = (id) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) => item.id !== id
      )
    );
  };


  // Total quantity
  const cartCount = cartItems.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );


  // Total price
  const cartTotal = cartItems.reduce(
    (total, item) => {
      const price = getNumericPrice(item.price);
      const quantity = Number(item.quantity || 0);

      return total + price * quantity;
    },
    0
  );


  // Open cart
  const openCart = () => {
    setIsCartOpen(true);
  };


  // Close cart
  const closeCart = () => {
    setIsCartOpen(false);
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};
