import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/success.png')}
          // source={{
          //   uri: 'https://media.istockphoto.com/photos/tropical-white-sand-beach-with-coco-palms-picture-id1181563943',
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    width: '80%',
    height: 300,
    overflow: 'hidden',
    marginVertical: 30,
  },
});

export default GameOverScreen;
