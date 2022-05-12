import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);

  console.log('places - ', places);
  251712;

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => (
        <PlaceItem
          image={null}
          title={itemData.item.title}
          address={null}
          onSelect={() =>
            props.navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.title,
              id: itemData.item.id,
            })
          }
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          console.log('Right-icon pressed');
          navData.navigation.navigate('NewPlace');
        }}>
        <Ionicons name="add" size={25} color={Colors.primary} />
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
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});

export default PlacesListScreen;
