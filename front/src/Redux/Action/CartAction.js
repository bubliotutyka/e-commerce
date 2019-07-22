export const addToCart = payload => {
  return {
    type: "ADD_CART_ITEM",
    payload,
  };
};

export const updateQuantity = payload => {
  return {
    type: "UPDATE_CART_ITEM_QUANTITY",
    payload,
  };
};

export const deleteItem = payload => {
  return {
    type: "DELETE_CART_ITEM",
    payload,
  }
}

export const clearCart = payload => {
  return {
    type: "CLEAR_CART",
    payload,
  }
}