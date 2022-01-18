import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>User Products Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserProductsScreen;
