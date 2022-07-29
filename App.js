/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState } from 'react';
import type { Node } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from 'react-native';


const App: () => Node = () => {

  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [userTask, setUserTask] = useState([]);


  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  };

  function addTaskHandler() {
    setUserTask((userTask) => [...userTask, enteredTaskText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer} placeholder="eg: 'Call Sam today'" onChangeText={taskInputHandler} />
        <Button title="Add Task" onPress={addTaskHandler} />
      </View>

      <View style={styles.TasksContainer}>
        {userTask.map((task) => <Text key={task}>{task}</Text>)}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  TasksContainer: {
    flex: 5
  }
});

export default App;
