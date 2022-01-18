import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Edit Product Screen</Text>
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

export default EditProductScreen;
