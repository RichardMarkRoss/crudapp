import axios from 'axios';

// Action types
export const PRODUCT_CREATED = 'PRODUCT_CREATED';
export const PRODUCT_FETCHED = 'PRODUCT_FETCHED';
export const PRODUCT_UPDATED = 'PRODUCT_UPDATED';
export const PRODUCT_DELETED = 'PRODUCT_DELETED';
export const API_ERROR = 'API_ERROR';

// Post a new product
export const createProduct = (productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://localhost:7204/api/Products', productData);
      dispatch({ type: PRODUCT_CREATED, payload: response.data });
    } catch (error) {
      dispatch({ type: API_ERROR, payload: error.message });
    }
  };
};

// Get products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://localhost:7204/api/Products');
      dispatch({ type: PRODUCT_FETCHED, payload: response.data });
    } catch (error) {
      dispatch({ type: API_ERROR, payload: error.message });
    }
  };
};

// Update a product
export const updateProduct = (productId, productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://localhost:7204/api/Products/${productId}`, productData);
      dispatch({ type: PRODUCT_UPDATED, payload: response.data });
    } catch (error) {
      dispatch({ type: API_ERROR, payload: error.message });
    }
  };
};

// Delete a product
export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://localhost:7204/api/Products/${productId}`);
      dispatch({ type: PRODUCT_DELETED, payload: productId });
    } catch (error) {
      dispatch({ type: API_ERROR, payload: error.message });
    }
  };
};