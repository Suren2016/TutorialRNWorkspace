import React from 'react';
import { Platform, SafeAreaView, Button, View } from 'react-native';

// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';

import ProductsOverviewScreen, {
  screenOptions as productsOverViewScreenOptions,
} from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen, { screenOptions as productDetailScreenOptions } from '../screens/shop/ProductDetailScreen';
import CartScreen, { screenOptions as cartScreenOptions } from '../screens/shop/CartScreen';
import OrdersScreen, { screenOptions as ordersScreenOptions } from '../screens/shop/OrdersScreen';
import UserProductsScreen, { screenOptions as userProductsScreenOptions } from '../screens/user/UserProductsScreen';
import EditProductScreen, { screenOptions as editProductScreenOptions } from '../screens/user/EditProductScreen';
import AuthScreen, { screenOptions as authScreenOptions } from '../screens/user/AuthScreen';
// import StartupScreen from '../screens/user/StartupScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import * as authactions from '../store/actions/auth';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

// ----------------------------------------------------------------------------------

const ProductsStackNavigator = createStackNavigator();
export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={productsOverViewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={productDetailScreenOptions}
      />
      <ProductsStackNavigator.Screen name="Cart" component={CartScreen} options={cartScreenOptions} />
    </ProductsStackNavigator.Navigator>
  );
};
// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => {
//         return <Ionicons name="cart-outline" size={23} color={Colors.primary} />;
//       },
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   },
// );

// ----------------------------------------------------------------------------------

const OrderStackNavigator = createStackNavigator();
export const OrdersNavigator = () => {
  return (
    <OrderStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrderStackNavigator.Screen name="Orders" component={OrdersScreen} options={ordersScreenOptions} />
    </OrderStackNavigator.Navigator>
  );
};

// const OrdersNavigator = createStackNavigator(
//   {
//     Orders: OrdersScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => {
//         return <Ionicons name="list-outline" size={23} color={Colors.primary} />;
//       },
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   },
// );

// ----------------------------------------------------------------------------------

const AdminStackNavigator = createStackNavigator();
export const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AdminStackNavigator.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={userProductsScreenOptions}
      />
      <AdminStackNavigator.Screen name="EditProduct" component={EditProductScreen} options={editProductScreenOptions} />
    </AdminStackNavigator.Navigator>
  );
};

// const AdminNavigator = createStackNavigator(
//   {
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen,
//   },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => {
//         return <Ionicons name="create-outline" size={23} color={Colors.primary} />;
//       },
//     },
//     defaultNavigationOptions: defaultNavOptions,
//   },
// );

// ----------------------------------------------------------------------------------
const ShopDrawerNavigator = createDrawerNavigator();
export const ShopNavigator = () => {
  const dispatch = useDispatch();
  return (
    <ShopDrawerNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItemList {...props} />
              <View>
                <Button
                  title="Logout"
                  color={Colors.primary}
                  onPress={() => {
                    dispatch(authactions.logout());
                    // props.navigation.navigate('Auth');
                  }}
                />
              </View>
            </SafeAreaView>
          </View>
        );
      }}>
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="cart-outline" size={23} color={Colors.primary} />;
          },
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="list-outline" size={23} color={Colors.primary} />;
          },
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: () => {
            return <Ionicons name="create-outline" size={23} color={Colors.primary} />;
          },
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};
// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primary,
//     },
//     contentComponent: (props) => {
//       const dispatch = useDispatch();
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
//             <DrawerItems {...props} />
//             <View>
//               <Button
//                 title="Logout"
//                 color={Colors.primary}
//                 onPress={() => {
//                   dispatch(authactions.logout());
//                   // props.navigation.navigate('Auth');
//                 }}
//               />
//             </View>
//           </SafeAreaView>
//         </View>
//       );
//     },
//   },
// );

// ----------------------------------------------------------------------------------
const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen name="Auth" component={AuthScreen} options={authScreenOptions} />
    </AuthStackNavigator.Navigator>
  );
};

// const AuthNavigator = createStackNavigator(
//   {
//     Auth: AuthScreen,
//   },
//   {
//     defaultNavigationOptions: defaultNavOptions,
//   },
// );

// ----------------------------------------------------------------------------------

// const MainNavigator = createSwitchNavigator({
//   Startup: StartupScreen,
//   Auth: AuthNavigator,
//   Shop: ShopNavigator,
// });

// export default createAppContainer(MainNavigator);
