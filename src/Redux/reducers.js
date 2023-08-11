import {
    PRODUCT_CREATED,
    PRODUCT_FETCHED,
    PRODUCT_UPDATED,
    PRODUCT_DELETED,
    API_ERROR,
  } from './actions';
  
  const initialState = {
    products: [],
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_CREATED:
        return { ...state, products: [...state.products, action.payload], error: null };
  
      case PRODUCT_FETCHED:
        return { ...state, products: action.payload, error: null };
  
      case PRODUCT_UPDATED:
        const updatedProducts = state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
        return { ...state, products: updatedProducts, error: null };
  
      case PRODUCT_DELETED:
        const filteredProducts = state.products.filter((product) => product.id !== action.payload);
        return { ...state, products: filteredProducts, error: null };
  
      case API_ERROR:
        return { ...state, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default productReducer; // Export the reducer as default
  