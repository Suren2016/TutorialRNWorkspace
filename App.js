/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // this is for only DEVS

// import mealsReducer from './7-state-redux/store/reducers/meals';
import productsReducer from './8-TheShop-App/store/reducers/products';
import cartReducer from './8-TheShop-App/store/reducers/cart';
import orderReducer from './8-TheShop-App/store/reducers/orders';

// import GuessNumberApp from './4-GuessNumber/GuessNumberApp';
// import TheMealsApp from './6-Navigation-TheMealsApp/TheMealsApp';
import TheShopApp from './8-TheShop-App/TheShopApp';

// This is for MEALS app
// const rootReduer = combineReducers({
//   meals: mealsReducer,
// });

// This is for The Shop app
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      {/* <GuessNumberApp /> */}
      {/* <TheMealsApp /> */}
      <TheShopApp />
    </Provider>
  );
};

export default App;
