import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (value, numOfRaound) => {
  return (
    <View key={value} style={styles.list}>
      <Text>#{numOfRaound} - </Text>
      <Text>{value}</Text>
    </View>
  );
};

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastguesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;
  console.log('userChoice - ', userChoice);
  console.log('currentGuess - ', currentGuess);
  console.log('currentLow - ', currentLow);
  console.log('currentHigh - ', currentHigh);
  console.log('pastGuesses - ', pastGuesses);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that rhis is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );

    console.log('nextNumber - ', nextNumber);

    setCurrentGuess(nextNumber);
    // setRounds(curRounds => curRounds + 1);
    setPastguesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          LOWER
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
          GREATER
        </MainButton>
      </Card>
      <ScrollView>
        {pastGuesses.map((guess, i) =>
          renderListItem(guess, pastGuesses.length - i),
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 340,
    maxWidth: '100%',
  },
  list: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export default GameScreen;
