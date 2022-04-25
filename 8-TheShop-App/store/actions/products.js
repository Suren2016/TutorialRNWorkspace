export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

import Product from '../../models/product';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://tutorial-rn-default-rtdb.firebaseio.com/products.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            'u1',
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price,
          ),
        );
      }
      dispatch({ type: SET_PRODUCTS, products: loadedProducts });
    } catch (e) {
      console.log('e - ', e);
      throw e;
    }
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const response = await fetch(`https://tutorial-rn-default-rtdb.firebaseio.com/products/${productId}.json`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Somthing not deleted!');
    }

    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};

export const createProduct = (title, imageUrl, description, price) => {
  return async (dispatch) => {
    const response = await fetch('https://tutorial-rn-default-rtdb.firebaseio.com/products.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        price,
      }),
    });

    const resData = await response.json();
    console.log('response - ', response);

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title: title,
        imageUrl: imageUrl,
        description: description,
        price: price,
      },
    });
  };
};

export const updateProduct = (id, title, imageUrl, description) => {
  return async (dispatch) => {
    const response = await fetch(`https://tutorial-rn-default-rtdb.firebaseio.com/products/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Somthing not updated!');
    }
    dispatch({
      type: UPDATE_PRODUCT,
      pid: id,
      productData: {
        title: title,
        imageUrl: imageUrl,
        description: description,
      },
    });
  };
};
