import CartService from '../../Service/CartService';

let cart = CartService.getCartContent();
cart = cart === null ? [] : cart;

const initialState = cart.length > 0 && Array.isArray(cart) ? cart : [];

export default (state = initialState, action) => {

  switch (action.type) {
    case "ADD_CART_ITEM":
      return addToCart(state, action.payload)

    case "UPDATE_CART_ITEM_QUANTITY":
      return updateQuantity(state, action.payload);

    case "DELETE_CART_ITEM":
      const newCart = state.filter(item => item !== action.payload);
      CartService.saveCart(newCart);
      return [...newCart];

    case "CLEAR_CART":
      CartService.saveCart([]);
      return [];

    default:
      return state;
  }
};

const addToCart = (state, payload) => {
  let newCart = [];
  let productInCart = false;
  let productInCartId = null;

  for (let i = 0; i < state.length; ++i) {
    if (state[i].id === payload.id) {
      productInCart = true;
      productInCartId = i;
    };
  }

  if (productInCart) {
    newCart = [ ...state ];
    newCart[productInCartId].quantity++;
  } else {
    newCart = [ ...state, CartService.newCartItem(payload)];
  }

  CartService.saveCart(newCart);
  return newCart;
};

const updateQuantity = (state, payload) => {
  let newCart = [];
  for (let i = 0; i < state.length; i++) {
    if (state[i] !== payload.old)
      newCart = [...newCart, state[i]];
    else
      newCart = [...newCart, payload.new];
  }
  CartService.saveCart(newCart)
  return [...newCart];
};