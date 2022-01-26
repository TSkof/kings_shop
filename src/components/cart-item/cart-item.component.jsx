import React from "react";

import { connect } from "react-redux";
import { addItem, removeItemFromCart } from "../../redux/cart/cart.actions";
import "./cart-item.styles.scss";

const CartItem = ({ item, removeItem, addItem } ) => {
    const {imageUrl, price, name, quantity} = item;
    return(
    <div className="cart-item">
        <img src={imageUrl} alt='item' />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="value">{quantity} x {price}€</span>
            <div className="arrow">
            <div className="left" onClick={() => removeItem(item)}>&#10096;</div>
            <span className="amount">Quantity</span>
            <div className="right" onClick={() => addItem(item)}>&#10097;</div>
            </div>
        </div>
    </div>
);}
const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItemFromCart(item))
  });
export default connect(null, mapDispatchToProps)(CartItem);