import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {TabNavigator} from "./Routes";



// console.disableYellowBox = true
const App = () => {
    return (
      
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
      
    );
};

export default App;