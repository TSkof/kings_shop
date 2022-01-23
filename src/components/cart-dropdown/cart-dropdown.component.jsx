import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartItemsSumm,
} from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, summ, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    {summ === 0 ? (
      <span className="hint">
        Your cart is empty, you can add items by clicking "ADD TO CART" on each
        item
      </span>
    ) : (
      <div className="summ">TOTAL: {summ} €</div>
    )}
    {summ === 0 ? null : (
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT{" "}
      </CustomButton>
    )}
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  summ: selectCartItemsSumm,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
