import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import colors from '../../styles/colors';


export default class HomeTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    

    
    render() {
        return (
            <View style={styles.container}>
                <View />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});
