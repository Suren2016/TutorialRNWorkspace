import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

import Ionicons from 'react-native-vector-icons/Ionicons';

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

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
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
  screen: {
    flexGrow: 1,
  },
  icon: {
    marginLeft: 12,
  },
});

export default CategoriesScreen;
