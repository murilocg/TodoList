import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import TaskList from './TaskList';
import NewTask from './NewTask';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedTasks: this.props.checkedTasks,
            uncheckedTasks: this.props.uncheckedTasks
        }
    }

    clean() {
        this.setState({ uncheckedTasks: [], checkedTasks: [] });
    }

    existTask(task) {
        let arr = this.state.uncheckedTasks.filter(t => t.name == task.name);
        if (arr.length > 0) return false;
        arr = this.state.checkedTasks.filter(t => t.name == task.name);
        return arr.length == 0;
    }

    add(task) {
        if (!this.existTask(task)) return;
        var tasks = this.state.uncheckedTasks.slice();
        tasks.unshift(task);
        this.setState({ uncheckedTasks: tasks });
    }

    remove(task) {
        if (task.checked) {
            let tasks = this.state.checkedTasks.filter((t) => t.name != task.name);
            this.setState({ checkedTasks: tasks });
        } else {
            let tasks = this.state.uncheckedTasks.filter((t) => t.name != task.name);
            this.setState({ uncheckedTasks: tasks });
        }
    }

    check(task) {
        let checkedTasks;
        let uncheckedTasks;
        if (task.checked) {
            checkedTasks = this.state.checkedTasks.filter((t) => t.name != task.name);
            uncheckedTasks = this.state.uncheckedTasks.slice();
            task.checked = !task.checked;
            uncheckedTasks.push(task);
            this.setState({ uncheckedTasks: uncheckedTasks, checkedTasks: checkedTasks });
        } else {
            uncheckedTasks = this.state.uncheckedTasks.filter((t) => t.name != task.name);
            checkedTasks = this.state.checkedTasks.slice();
            task.checked = !task.checked;
            checkedTasks.unshift(task);
            this.setState({ uncheckedTasks: uncheckedTasks, checkedTasks: checkedTasks });
        }
        this.setState({ uncheckedTasks: uncheckedTasks, checkedTasks: checkedTasks });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
                <Menubar clean={() => { this.clean() }} />
                <NewTask add={(t) => this.add(t)} />
                <TaskList checkedTasks={this.state.checkedTasks} uncheckedTasks={this.state.uncheckedTasks} remove={(t) => this.remove(t)} check={(t) => this.check(t)} />
            </View>
        );
    }
}

class Menubar extends Component {
    render() {
        return (
            <View style={styles.menubar}>
                <Text style={{ color: "white", fontSize: 30, fontWeight: 'bold' }}>{"TODO"}</Text>
                <IconButton onPress={this.props.clean} icon="delete" size={30} color="white" style={{ height: 60, width: 60}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menubar: {
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#25db88',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E6E6E6'
    }
});