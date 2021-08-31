export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteProduct = productId => {
  return {
    type: DELETE_PRODUCT,
    productId: productId,
  };
};

export const createProduct = product => {
  return {
    type: CREATE_PRODUCT,
    product: product,
  };
};

export const updateProduct = (productId, product) => {
  return {
    type: UPDATE_PRODUCT,
    productId: productId,
    product: product,
  };
};
