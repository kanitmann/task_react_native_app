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
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

const App: () => Node = () => {

  const [userTask, setUserTask] = useState([]);

  function addTaskHandler(enteredTaskText) {
    setUserTask((userTask) => [...userTask, { text: enteredTaskText, id: Math.random().toString() }]);
  }

  return (

    <View style={styles.appContainer}>
      <View>
        <Text style={styles.appTitle}>
          Hello, Kanit!
        </Text>
      </View>
      <TaskInput onAddText={addTaskHandler} />
      <View style={styles.TasksContainer}>
        <FlatList
          data={userTask}
          renderItem={(itemData) => {
            return <TaskItem text={itemData.item.text} />;
          }
          }
          keyExtractor={(item, index) => {
            return item.id;
          }}
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
  TasksContainer: {
    flex: 5,
  },
});

export default App;
