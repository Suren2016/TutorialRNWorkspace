import React from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';

import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  console.log('orders - ', orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: () => (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          console.log('Left-icon pressed');
          navData.navigation.toggleDrawer();
        }}>
        <Ionicons name="menu-outline" size={25} color={Colors.primary} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 12,
  },
});

export default OrdersScreen;
