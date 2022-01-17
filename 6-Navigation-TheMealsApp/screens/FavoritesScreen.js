import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.contnent}>
        <Text>No Favorite meals found</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'YOUR Favorites',
    headerLeft: () => (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
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
  contnent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
