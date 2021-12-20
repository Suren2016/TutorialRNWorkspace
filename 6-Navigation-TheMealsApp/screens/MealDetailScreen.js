import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.container}>
      <Text>MealDetailScreen</Text>
      <Button title="Go Back" onPress={() => props.navigation.popToTop()} />
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

export default MealDetailScreen;
