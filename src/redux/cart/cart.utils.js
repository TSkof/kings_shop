import { showToast } from "./cart.reducer";


export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    var answer = window.confirm("Last " + cartItemToRemove.name + " will be deleted!")
    if(answer){
      showToast('info', cartItemToRemove.name + " " + cartItemToRemove.price + " € removed from cart successfully !" + String.fromCharCode('9996'));
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }else{
      return cartItems;
    }
  }else{
    showToast('info', cartItemToRemove.name + " " + cartItemToRemove.price + " € removed from cart successfully !" + String.fromCharCode('9996'));
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
