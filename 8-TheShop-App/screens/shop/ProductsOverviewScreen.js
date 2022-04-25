import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Button, ActivityIndicator, View, Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productsActions from '../../store/actions/products';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const loadedProducts = useCallback(() => {
    (async () => {
      setError(undefined);
      setIsLoading(true);
      try {
        await dispatch(productsActions.fetchProducts());
      } catch (e) {
        setError(e.message);
      }
      setIsLoading(false);
    })();
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    loadedProducts();
  }, [dispatch, loadedProducts]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener('willFocus', () => {
      loadedProducts();
    });

    return () => {
      willFocusSub.remove();
    };
  }, [loadedProducts, props.navigation]);

  const selectItemHendler = (id, title) => {
    props.navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title,
    });
  };

  if (isLoading) {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.indicatorContainer}>
        <Text>No products data</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.indicatorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHendler(itemData.item.id, itemData.item.title);
          }}>
          <>
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={() => {
                selectItemHendler(itemData.item.id, itemData.item.title);
              }}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={() => {
                dispatch(cartActions.addToCart(itemData.item));
              }}
            />
          </>
        </ProductItem>
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
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
      <TouchableOpacity style={styles.icon} onPress={() => navData.navigation.navigate('Cart')}>
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
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsOverviewScreen;
