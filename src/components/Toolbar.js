import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconMaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Toolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <Icon name="chevron-back" color={colors.inactiveTintColor} size={30}  style={{marginLeft: 5}} />

                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>apple</Text>
                    <IconMaterial name="verified" color={colors.blue} size={16} style={{marginLeft: 5}} />
                </View>

                <IconMaterialCom name="dots-horizontal" color={colors.inactiveTintColor} size={30} style={{marginRight: 5}} />

            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.black,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    titleContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleStyle:{
        color: colors.white,
        fontSize: 18, 
        fontWeight: 'bold'
    }
});
