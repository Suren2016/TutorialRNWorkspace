import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, check } from 'react-native-permissions';

import Colors from '../constants/Colors';

const ImgePicker = () => {
  const verifyPermissions = () => {
    check(PERMISSIONS.IOS.CAMERA).then((res) => {
      console.log('res - ', res);
      if (res !== 'granted') {
        Alert.alert('Insufficient permissions!', 'You need to grant camera permissions to use this app.', [
          { text: 'OK' },
        ]);
        return false;
      }
      return true;
    });
  };

  const takeImageHandler = () => {
    const hasPermissiom = verifyPermissions();
    if (!hasPermissiom) {
      return;
    }
    launchCamera();
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No image picked yet</Text>
        <Image style={styles.image} />
      </View>
      <Button title="Take Image" color={Colors.accent} onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImgePicker;
