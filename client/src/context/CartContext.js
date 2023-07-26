// REACT
import React, { createContext, useEffect, useState } from "react";

// CREATE CONTEXT
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);


  // CART AMOUNT
  useEffect(() => {
    const amount = cart.reduce((a, b) => a + b.amount, 0);
    setItemsAmount(amount);
  }, [cart]);

  // CART TOTAL
  useEffect(() => {
    const total = cart.reduce((a, c) => a + c.attributes.price * c.amount, 0);
    setTotal(total);
  }, [cart]);

  // ADD TO CART
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };
    setCart([...cart, newItem]);

    // CHECK IF ITEM IS ALREADY IN THE CART
    const cartItem = cart.find((item) => item.id === itemID);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    // OPEN THE CART SIDEBAR
    setIsOpen(true);
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // HANDLE AMOUNT INPUT
  const handleAmountInput = (e, id) => {
    const value = parseInt(e.target.value);

    // FIND THE ITEM IN THE CART BY ID
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    // OPEN THE CART SIDEBAR
    setIsOpen(true);
  };

  // HANDLE AMOUNT SELECT
  const handleAmountSelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  // HANDLE CLEAR CART
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleAmountInput,
        handleAmountSelect,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
