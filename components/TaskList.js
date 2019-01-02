import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Task from './Task';
import { Text } from 'react-native-paper';

export default class TaskList extends Component {

    render() {
        let tasks = this.props.uncheckedTasks.concat(this.props.checkedTasks);
        let render;
        if (tasks.length > 0) {
            render = tasks.map((t) => <Task key={t.name} task={t} remove={this.props.remove} check={this.props.check} />);
        } else {
            render = <Text style={styles.emptyList}>{"Empty List"}</Text>;
        }
        return (
            <ScrollView style={styles.container}>{render}</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        flexDirection: "column",
        padding: 10
    },
    emptyList: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c6c6c6',
        textAlign: 'center'
    }
});