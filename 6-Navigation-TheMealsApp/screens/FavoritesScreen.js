import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoritesScreen;
