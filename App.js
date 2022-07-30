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
  FlatList
} from 'react-native';


const App: () => Node = () => {

  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [userTask, setUserTask] = useState(['Task 1', 'Task 2', 'Task 3']);


  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  };

  function addTaskHandler() {
    setUserTask((userTask) => [...userTask, enteredTaskText]);
  };

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.appTitle}>
          Hello, Kanit!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer} placeholder="eg: 'Call Sam today'" placeholderTextColor="#CCCCCC" onChangeText={taskInputHandler} />
        <Button title="Add Task" onPress={addTaskHandler} />
      </View>

      <View style={styles.TasksContainer}>
        <FlatList
          data={userTask}
          renderItem={(itemData) => {
            return (
              <View
                key={itemData}
                style={styles.taskItems}
              >
                <Text style={styles.taskText}>
                  {itemData.item}
                </Text>
              </View>
            )
          }
          }
          alwaysBounceVertical={false} />

      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  appTitle: {
    fontSize: 36,
    color: "#0F0E17",
    fontFamily: "Inter",
    fontWeight: "700",
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC'
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#ECECEC',
    width: '70%',
    marginRight: 8,
    padding: 8,
    color: '#0F0E17',
  },
  TasksContainer: {
    flex: 5,
  },
  taskItems: {
    margin: 8,
    padding: 8,
    borderRadius: 1,
    height: 50,
    shadowColor: "#ECECEC",
    shadowRadius: 10,
    elevation: 0.1,
    justifyContent: "center",
  },
  taskText: {
    color: '#0F0E17',
  }
});

export default App;
