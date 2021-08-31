import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product';
const OWNERID = 'u1';

import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../actions/products';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === OWNERID),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        OWNERID,
        action.product.title,
        action.product.imageUrl,
        action.product.description,
        +action.product.price,
      );
      return {
        ...state,
        availableProducts: [...state.availableProducts, newProduct],
        userProducts: [...state.userProducts, newProduct],
      };

    case UPDATE_PRODUCT:
      const editedProduct = new Product(
        action.productId,
        OWNERID,
        action.product.title,
        action.product.imageUrl,
        action.product.description,
        +action.product.price,
      );

      const userProducts = [...state.userProducts];
      const indexUserProducts = [...state.userProducts].findIndex(
        prod => prod.id === action.productId,
      );
      userProducts[indexUserProducts] = editedProduct;

      const availableProducts = [...state.availableProducts];
      const indexAvailableProducts = [...state.availableProducts].findIndex(
        prod => prod.id === action.productId,
      );
      availableProducts[indexAvailableProducts] = editedProduct;

      return {
        ...state,
        userProducts: userProducts,
        availableProducts: availableProducts,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          product => product.id !== action.productId,
        ),
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.productId,
        ),
      };
  }
  return state;
};
