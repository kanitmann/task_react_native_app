import { useState } from 'react';
import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

function TaskInput(props) {
    const [enteredTaskText, setEnteredTaskText] = useState('');

    function taskInputHandler(enteredText) {
        setEnteredTaskText(enteredText);
    };

    function addTaskHandler() {
        if (enteredTaskText.length == 0) {
            alert("Text cannot be empty");
        }
        else {
            props.onAddText(enteredTaskText);
            setEnteredTaskText('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textContainer}
                placeholder="eg: 'Call Sam today'"
                placeholderTextColor="#CCCCCC"
                onChangeText={taskInputHandler}
                value={enteredTaskText}
            />
            <Button
                title="Add Task"
                onPress={addTaskHandler}
            />
        </View>
    )
};

const styles = StyleSheet.create({
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
});

export default TaskInput;