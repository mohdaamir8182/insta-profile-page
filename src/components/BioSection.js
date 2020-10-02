import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import colors from '../styles/colors';


export default class  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    
    
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.topRow}>
                    <Image source={require('../assets/apple.png')} style={{height: 85, width: 85}} />
                    
                    <View style={styles.followersContainer}>
                        <Text style={styles.followersTilte}>676</Text>
                        <Text style={styles.followersNumbers}>Posts</Text>
                    </View>

                    <View style={styles.followersContainer}>
                        <Text style={styles.followersTilte}>23.9 M</Text>
                        <Text style={styles.followersNumbers}>Followers</Text>
                    </View>

                    <View style={styles.followersContainer}>
                        <Text style={styles.followersTilte}>6</Text>
                        <Text style={styles.followersNumbers}>Following</Text>
                    </View>


                </View>

                <View style={styles.statusArea}>
                    <Text style={styles.boldText}>apple</Text>
                    <Text style={styles.followersNumbers}>Everyone has a story to tell.</Text>
                    <Text style={styles.followersNumbers}>Tag #ShotOniPhone to take part.</Text>
                    <Text style={styles.followersNumbers}>One apple park way, cupertino, california</Text>
                    <Text>
                        <Text style={styles.followersNumbers}>Followed by </Text>
                        <Text style={styles.boldText}>saad_javaid, umer_chaudry17</Text>
                    </Text>
                    <Text>
                      <Text style={styles.followersNumbers}>and </Text>
                      <Text style={styles.boldText}>18 others</Text>
                    </Text>
                </View>


            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        paddingRight: 10

    },
    topRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    statusArea:{
        paddingLeft: 20
    },
    followersContainer:{
        alignItems: 'center'
    },
    followersTilte:{
        color: colors.white,
        fontWeight: 'bold'
    },
    followersNumbers:{
        color: colors.white,
    },
    boldText:{
        fontWeight: 'bold',
        color: colors.white
    }
});
