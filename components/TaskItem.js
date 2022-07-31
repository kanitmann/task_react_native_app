import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

function TaskItem(props) {
    return (
        <View
            key={props.id}
            style={styles.taskItems}
        >
            <Text style={styles.taskText}>
                {props.text}
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
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

export default TaskItem;