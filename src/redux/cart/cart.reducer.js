import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
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
        theme: "dark"
        
      });
    }else if (type === "info") {
        toast.info(msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
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
            showToast('success', action.payload.name + " " + action.payload.price + " € added to cart successfully !" + String.fromCharCode('9996'));
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
        showToast('info', action.payload.name + " " + action.payload.price + " € removed from cart successfully !" + String.fromCharCode('9996'));
        return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            showToast('info', "All " + action.payload.name+ " products removed from cart successfully !" + String.fromCharCode('10060'));
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                    )
            }
        default:
            return state;
    }
}

export default cartReducer;