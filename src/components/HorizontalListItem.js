import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import colors from '../styles/colors';


export default class HorizontalListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/apple.png')} style={{height: 65, width: 65}} />
                <Text style={{color: colors.white, fontSize: 12}}>short and ..</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center'
    },
});
