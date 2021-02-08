import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const handleClick = () => {
    setButtonText("Placing Order...");
    setTimeout(() => {
      alert("Order Placed");
      setButtonText("Place Order");
      emptyCart();
      localStorage.setItem("cart", []);
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      <div className="order-button">
        {cartItems.length ? (
          <button onClick={handleClick}>{buttonText}</button>
        ) : (
          <h3>You have no Items in your cart!</h3>
        )}
      </div>
    </main>
  );
};

export default Cart;
