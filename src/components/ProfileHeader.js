import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';

import Toolbar from './Toolbar';
import BioSection from './BioSection';
import ActionButton from './ActionButton';
import HorizontalListItem from './HorizontalListItem'


const listData = [
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

export default class ProfileHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'follow'
        };
    }
    
    handleClick = (action) => {
        if(this.state.selected != action){
            this.setState({selected:action})
        }
    }
    

    
    render() {
        return (
            <View style={styles.container}>

                <Toolbar />

                <BioSection />

                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        activeOpacity={1} 
                        onPress={()=>this.handleClick('follow')}
                    >
                        <ActionButton
                            title="Follow" 
                            isSelected={this.state.selected == 'follow' && true} 
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={1} 
                        onPress={()=>this.handleClick('message')}
                    >
                        <ActionButton
                            title="Message" 
                            isSelected={this.state.selected == 'message' && true} 
                        />
                    </TouchableOpacity>
                    

                </View>

                <View style={styles.list}>
                    <FlatList 
                        data={listData}
                        horizontal={true}
                        keyExtractor={item=>item.id}
                        renderItem={({item}) => {
                            return(
                                <HorizontalListItem />
                            )
                        }}
                    />
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        
    },
    buttonsRow:{
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-around'
    }
});
