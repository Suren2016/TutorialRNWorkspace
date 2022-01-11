import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  console.log('selectedMeal - ', selectedMeal);

  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back" onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //   <Item
      //     title="F"
      //     iconName="ios-star"
      //     onPress={() => {
      //       console.log('Item pressed');
      //     }}
      //   />
      // </HeaderButtons>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          console.log('Item pressed');
        }}>
        <Ionicons name="star-outline" size={25} color={Colors.accentColor} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
});

export default MealDetailScreen;
