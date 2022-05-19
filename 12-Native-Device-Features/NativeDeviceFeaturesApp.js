import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import PlacesNavigator from '../12-Native-Device-Features/navigation/PlacesNavigator';

const NativeDeviceFeaturesApp = () => {
  return <PlacesNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NativeDeviceFeaturesApp;
