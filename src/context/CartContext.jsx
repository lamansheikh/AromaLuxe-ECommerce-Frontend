import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");

    if (!savedCart) {
      return [];
    }

    try {
      const parsedCart = JSON.parse(savedCart);

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


  // Save cart whenever it changes
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

      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                price: getNumericPrice(item.price),
                quantity: Number(item.quantity) + 1,
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...product,
          price: getNumericPrice(product.price),
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              price: getNumericPrice(item.price),
              quantity: Number(item.quantity) + 1,
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
                price: getNumericPrice(item.price),
                quantity: Number(item.quantity) - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Delete product
  const removeFromCart = (id) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  };

  // Number displayed on cart icon
  const cartCount = cartItems.reduce(
    (total, item) =>
      total + (Number(item.quantity) || 0),
    0
  );

  // Total price
  const cartTotal = cartItems.reduce(
    (total, item) => {
      const numericPrice = getNumericPrice(item.price);
      const quantity = Number(item.quantity) || 0;

      return total + numericPrice * quantity;
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
  return useContext(CartContext);
};
