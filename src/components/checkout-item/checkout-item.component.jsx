import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItemFromCart } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, itemsToRemove, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10096;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10097;</div>
      </span>
      <span className="price">{price} €</span>
      <div className="remove-button" onClick={() => itemsToRemove(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  itemsToRemove: (item) => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
