import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationContainer from './navigation/NavigationContainer';

import ProductsOverviewScreen from './screens/shop/ProductsOverviewScreen';

const TheShopApp = () => {
  return (
    <View style={styles.container}>
      {/* <ProductsOverviewScreen /> */}
      <NavigationContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 100,
  },
});

export default TheShopApp;
