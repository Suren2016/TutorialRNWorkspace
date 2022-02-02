import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
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
    headerRight: () => (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navData.navigation.navigate('Cart')}>
        <Ionicons name={'cart-outline'} size={22} color={Colors.primary} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 12,
  },
  iconLeft: {
    marginLeft: 12,
  },
});

export default ProductsOverviewScreen;
