import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import colors from '../styles/colors';


export default class ActionButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    
    render() {
        return (
            <View 
                style={{...styles.container,backgroundColor: this.props.isSelected ? colors.blue : colors.white}} 
            >
                <Text>{this.props.title}</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 30,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
});
