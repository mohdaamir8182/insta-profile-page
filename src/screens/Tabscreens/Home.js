import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Platform,
    StatusBar
} from 'react-native';
import colors from '../../styles/colors';
import ProfileHeader from '../../components/ProfileHeader';
import HomeTab from '../GallerytabScreens/HomeTab'
import { CollapsibleHeaderScrollView } from 'react-native-collapsible-header-views';

const data = [
    {id:1 , name: "amir"},
    {id:2 , name: "amir"},
    {id:3 , name: "amir"},
    {id:4 , name: "amir"},
    {id:5 , name: "amir"},
    {id:6 , name: "amir"},
    {id:7 , name: "amir"},
    {id:8 , name: "amir"},
    {id:9 , name: "amir"},
    {id:10 , name: "amir"},
    {id:11 , name: "amir"},
]


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'follow'
        };
    }
    


    
    render() {
        return (
            <View style={styles.container}>
                
                    <ProfileHeader />
                

            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        
    },
    
});
