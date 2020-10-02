import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/screens/Tabscreens/Home';
import Icon from 'react-native-vector-icons/AntDesign'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconFontawesome from 'react-native-vector-icons/FontAwesome'
import colors from '../src/styles/colors';

const iconSize = 24;

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

    return(

        <Tab.Navigator
         
            tabBarOptions={{
                activeTintColor: colors.activeTintColor,
                inactiveTintColor: colors.inactiveTintColor,
                showLabel: false,
                adaptive: true,
                style: {height: 55, backgroundColor: colors.black,}
              }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                      tabBarIcon: ({ color, size }) => (
                      <Icon name="home" color={color} size={iconSize} />
                    ),
                  }}
            />

            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                        tabBarIcon: ({ color, size }) => (
                        <Icon name="search1" color={color} size={iconSize} />
                    ),
                  }}
            />

            <Tab.Screen
                name="Add"
                component={Home}
                options={{
                        tabBarIcon: ({ color, size }) => (
                        <IconMaterial name="add-box" color={color} size={iconSize} />
                    ),
                  }}
            />

            <Tab.Screen
                name="Likes"
                component={Home}
                options={{
                      tabBarIcon: ({ color, size }) => (
                        <Icon name="hearto" color={color} size={iconSize} />
                    ),
                  }}
            />

            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                      tabBarIcon: ({ color, size }) => (
                      <IconFontawesome name="user-circle-o" color={color} size={iconSize} />
                    ),
                  }}
            />

        </Tab.Navigator>
    );

}