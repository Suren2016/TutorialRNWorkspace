import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
  CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  };

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          })
        }>
        <View>
          <Text style={{}}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    // margin: 24,
    // borderWidth: 1,
    // padding: 20,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default CategoriesScreen;
