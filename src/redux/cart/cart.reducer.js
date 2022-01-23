import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};
export const showToast = ( type = "success", msg ) => {
    if (type === "success") {
      toast.success(msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        limit: 4
        
      });
    }
  };
  
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            showToast('success', action.payload.name+ " " + action.payload.price + " € added to cart successfully !");
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;