import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {ReactComponent as Logo} from  "../../assets/creditcard.svg"
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KMFsRDo1DZQXyu0tTUsW1TKLSXRXWyFw0OI8OxJw6zR0CGcs2nS3aZ95Lv6ItoycWvWrUuZThdve2Ho84YQpANp00cmgixBpm";

const onToken = token => {
    console.log(token);
    alert("Payment succesful")
}

return (<StripeCheckout
    currency="EUR"
    label="PAY NOW"
    name="KING's CLOTHING"
    billingAddress
    shippingAddress
    locale="de"
    description={`Your total is ${price} €`}
    amount={priceForStripe}
    panelLabel="PAY NOW"
    token={onToken}
    stripeKey={publishableKey}
    />)
}
export default StripeCheckoutButton;