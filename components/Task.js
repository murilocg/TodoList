import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Checkbox, Text, IconButton, Card } from 'react-native-paper';

export default class Task extends Component {

    check() {
        this.props.check(this.props.task);
    }

    remove() {
        this.props.remove(this.props.task);
    }

    render() {
        return (
            <Card style={styles.container}>
                <Card.Content style={styles.content}>
                    <Checkbox status={this.props.task.checked ? 'checked' : "unchecked"} onPress={() => { this.check() }} />
                    <Text style={!this.props.task.checked ? styles.checked : styles.unchecked}>{this.props.task.name}</Text>
                    <IconButton size={20} onPress={() => { this.remove() }} icon="clear"  color="#E6E6E6"/>
                </Card.Content>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 1,
        borderWidth: 1,
        borderColor: "#E6E6E6"
    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    checked: {
        fontWeight: 'bold',
        color: "#07013f",
        flex: 1,
    },
    unchecked: {
        flex: 1,
        fontWeight: 'bold',
        color: "#07013f",
        textDecorationLine: 'line-through'
    }
});