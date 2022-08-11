/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // this is for only DEVS
import ReduxThunk from 'redux-thunk';

// import mealsReducer from './7-state-redux/store/reducers/meals';
import productsReducer from './8-TheShop-App/store/reducers/products';
import cartReducer from './8-TheShop-App/store/reducers/cart';
import orderReducer from './8-TheShop-App/store/reducers/orders';
import authReducer from './8-TheShop-App/store/reducers/auth';
import PushNotificationApp from './16-Push-Notification/PushNotificationApp';

// import GuessNumberApp from './4-GuessNumber/GuessNumberApp';
// import TheMealsApp from './6-Navigation-TheMealsApp/TheMealsApp';
// import TheShopApp from './8-TheShop-App/TheShopApp';
// import NativeDeviceFeaturesApp from './12-Native-Device-Features/NativeDeviceFeaturesApp';
// import placesReducer from './12-Native-Device-Features/store/places-reducer';

// // For 12-Native-Device-Features app
// const rootReducer = combineReducers({
//   places: placesReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// This is for MEALS app
// const rootReduer = combineReducers({
//   meals: mealsReducer,
// });

// This is for The Shop app
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//

const App = () => {
  return (
    <Provider store={store}>
      {/* <GuessNumberApp /> */}
      {/* <TheMealsApp /> */}
      {/* <TheShopApp /> */}
      {/* <NativeDeviceFeaturesApp /> */}
      <PushNotificationApp />
    </Provider>
  );
};

export default App;
