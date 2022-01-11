import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
// import Ionicons from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <View style={styles.container}>
      <HeaderButton
        {...props}
        // IconComponent={Ionicons}
        // iconSize={23}
        // color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});

export default CustomHeaderButton;
