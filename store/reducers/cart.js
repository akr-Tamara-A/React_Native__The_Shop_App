import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';
import {ADD_ORDER} from '../actions/order';
import CartItem from '../../models/cartItem';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let cartItem;

      if (state.items[addedProduct.id]) {
        cartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice,
        );
      } else {
        cartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }

      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.id]: cartItem,
        },
        totalAmount: state.totalAmount + prodPrice,
      };

    case REMOVE_FROM_CART:
      const productId = action.productId;
      const selectedProduct = state.items[productId];

      let cartItems;

      if (selectedProduct.quantity > 1) {
        const updatedCartItem = new CartItem(
          selectedProduct.quantity - 1,
          selectedProduct.prodPrice,
          selectedProduct.prodTitle,
          selectedProduct.sum - selectedProduct.prodPrice,
        );
        cartItems = {...state.items, [productId]: updatedCartItem};
      } else {
        cartItems = {...state.items};
        delete cartItems[productId];
      }
      return {
        ...state,
        items: cartItems,
        totalAmount: state.totalAmount - selectedProduct.prodPrice,
      };

    case ADD_ORDER:
      return initialState;
  }

  return state;
};
