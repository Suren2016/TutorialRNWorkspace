import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };
  const catId = props.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // console.log('selectedCategory - ', selectedCategory);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
      {/* <Text>CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to details"
        onPress={() => props.navigation.navigate('MealDetail')}
      />
      <Button title="Go Back" onPress={() => props.navigation.pop()} /> */}
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
