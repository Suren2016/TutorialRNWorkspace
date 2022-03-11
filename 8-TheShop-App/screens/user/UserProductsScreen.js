import React from 'react';
import { Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {}}>
          <>
            <Button color={Colors.primary} title="Edit" onPress={() => {}} />
            <Button color={Colors.primary} title="Delete" onPress={() => {}} />
          </>
        </ProductItem>
      )}
    />
  );
};

UserProductsScreen.navigationOptions = navData => {
  return {
    headerLeft: () => (
      <TouchableOpacity
        style={styles.iconLeft}
        onPress={() => {
          console.log('Left-icon pressed');
          navData.navigation.toggleDrawer();
        }}>
        <Ionicons name="menu-outline" size={25} color={Colors.primary} />
      </TouchableOpacity>
    ),
    // headerRight: () => (
    //   <TouchableOpacity
    //     style={styles.icon}
    //     onPress={() => navData.navigation.navigate('Cart')}>
    //     <Ionicons name={'cart-outline'} size={22} color={Colors.primary} />
    //   </TouchableOpacity>
    // ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    marginLeft: 12,
  },
});

export default UserProductsScreen;
