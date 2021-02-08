import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(item.id)}
        className={iconClassName}
        ref={ref}
      ></i>
      <img alt="" src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
