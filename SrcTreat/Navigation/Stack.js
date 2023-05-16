import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Bottom from './Bottom'
import Splash from '../Screens/Splash';
import Details from '../Screens/Details';
const AppStack = createStackNavigator();

const MainAppNav = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, [showSplash]);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Bottom"
        screenOptions={{headerShown: false}}>
        {showSplash && <AppStack.Screen name={'Splash'} component={Splash} />}
        <AppStack.Screen name={'Bottom'} component={Bottom} />
        {/* <AppStack.Screen name={'Detail'} component={Details} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
