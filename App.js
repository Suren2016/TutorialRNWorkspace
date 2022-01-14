/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealsReducer from './7-state-redux/store/reducers/meals';

// import GuessNumberApp from './4-GuessNumber/GuessNumberApp';
import TheMealsApp from './6-Navigation-TheMealsApp/TheMealsApp';

const rootReduer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReduer);

const App = () => {
  return (
    <Provider store={store}>
      {/* <GuessNumberApp /> */}
      <TheMealsApp />
    </Provider>
  );
};

export default App;
