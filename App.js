/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    !!enteredGoal &&
      setCourseGoals(currentGoals => [
        ...currentGoals,
        { key: Math.random().toString(), value: enteredGoal },
      ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        {/* <Text>HELLO Suren</Text> */}
        <TextInput
          placeholder={'enter'}
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      {/* <ScrollView style={styles.scrolling}>
        {courseGoals.map(goal => (
          <View style={styles.listItem} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem} key={itemData.item.key}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    // flex: 1,
    marginTop: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    width: '80%',
  },
  listItem: {
    marginHorizontal: 24,
    marginVertical: 8,
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'lightgray',
  },
  scrolling: {
    // marginVertical: 0,
    // paddingVertical: 16,
  },
});

export default App;
