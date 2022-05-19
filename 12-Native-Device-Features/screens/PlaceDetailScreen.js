import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PlaceDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlaceDetailScreen;
