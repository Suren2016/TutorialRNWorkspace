import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { useDispatch } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        console.log('userData - ', userData);
        if (!userData) {
          props.navigation.navigate('Auth');
          return;
        }
        const transformedData = JSON.parse(userData);
        const { token, userId, expiryDate } = transformedData;
        const expirationDate = new Date(expiryDate);
        if (expirationDate <= new Date() || !token || !userId) {
          props.navigation.navigate('Auth');
          return;
        }

        const expirationTime = expirationDate.getTime() - new Date().getTime();

        props.navigation.navigate('Shop');
        dispatch(authActions.authenticate(userId, token, expirationTime));
      } catch (e) {
        console.log('err - ', e);
      }
    };
    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export default StartupScreen;
