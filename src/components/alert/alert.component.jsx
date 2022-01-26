import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, removeItemFromCart } from "../../redux/cart/cart.actions";
import { selectOpenAlert } from "../../redux/alert/alert.selector";
import "./alert.component.scss"

const AlertDialog = ({ item, removeItem, alert }) => {
  if (!alert.open) {
    return null;
  }
  return (
    <div className="backdropStyle" >
      <div className="modalStyle" >
        {this.props.children}

        <div className="footer">
          <button onClick={removeItem(item)}>Delete</button>
          <button onClick={selectOpenAlert()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  itemsToRemove: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item))
});
export default connect(null, mapDispatchToProps)(AlertDialog);