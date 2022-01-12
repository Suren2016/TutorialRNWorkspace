import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'YOUR Favorites',
    headerLeft: () => (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          console.log('Left-icon pressed');
          navData.navigation.toggleDrawer();
        }}>
        <Ionicons name="menu-outline" size={25} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 12,
  },
});

export default FavoritesScreen;
