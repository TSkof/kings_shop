import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsSumm,
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, summ}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
    <div className="summ">
      <span>Price Total: {summ} €</span>
    </div>
    <div className="warning">
      **Please use the following test credit card for payment**
      <br/>
      CC-NUMBER: 4242 4242 4242 4242 - EXP: 12/2023 - CCV: 123
    </div>
    <StripeCheckoutButton price={summ}/>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  summ: selectCartItemsSumm,
});
export default connect(mapStateToProps)(CheckoutPage);
