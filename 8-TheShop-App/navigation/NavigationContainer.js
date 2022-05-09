import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import ShopNavigator from './ShopNavigator';

const NavigationContainer = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const navRef = useRef();

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(NavigationActions.navigate('Auth'));
    }
  }, [isAuth]);

  return <ShopNavigator ref={navRef} />;
};

export default NavigationContainer;
