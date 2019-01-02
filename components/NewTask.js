import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput, IconButton} from 'react-native-paper';
export default class NewTask extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    add(){
        var task = { name: this.state.name, checked: false};
        this.props.add(task);
        this.setState({name: ''});
    }

    onChange(value){
        this.setState({name: value});
    }

    render() {
        return (
            <View style={{height: 60, margin: 20, flexDirection:"row", justifyContent: "space-between", alignItems: 'center'}}>
                <TextInput style={{flex: 1, backgroundColor: "white"}} value={this.state.name} onChangeText={(text) => {this.onChange(text)}} />
                <IconButton onPress={() => {this.add()}} icon="add" size={30} color="white" style={{backgroundColor: "#25db88", height:60, width:60}}/>
            </View>
        );
    }
}