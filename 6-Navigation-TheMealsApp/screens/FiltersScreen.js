import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Platform,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../7-state-redux/store/actions/meals';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactosFree, setIsLactosFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactosFree,
      vegan: isVegan,
      isVegeterian: isVegetarian,
    };

    dispatch(setFilter(appliedFilters));
  }, [isGlutenFree, isLactosFree, isVegan, isVegetarian]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={prev => setIsGlutenFree(prev)}
      />
      <FilterSwitch
        label="Lactos-Free"
        state={isLactosFree}
        onChange={prev => setIsLactosFree(prev)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={prev => setIsVegan(prev)}
      />
      <FilterSwitch
        label="Vegiterian"
        state={isVegetarian}
        onChange={prev => setIsVegetarian(prev)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filters Meals',
    headerLeft: () => (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}>
        <Ionicons name="menu-outline" size={25} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 12 }}
        onPress={navData.navigation.getParam('save')}>
        <Ionicons name="save-outline" size={25} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 12,
  },
  filterContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
  },
});

export default FiltersScreen;
