import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          })
        }
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.screen}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={item => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    // margin: 24,
    // borderWidth: 1,
    // padding: 20,
  },
});

export default CategoriesScreen;
