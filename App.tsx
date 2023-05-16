import 'react-native-gesture-handler';
import 'react-native-reanimated'
import React from 'react';
import {StatusBar, Platform, LogBox, View, Text,} from 'react-native';
// import MainNavigation from './Src/Navigation/Stack';
import MainNavigation from './SrcTreat/Navigation/Stack';
import {
  OnlineStatusProvider,
} from './Src/Shared/helper';

const App =()=> {
  // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return (
    <OnlineStatusProvider>
        <StatusBar
          hidden={false}
          barStyle={
            Platform.OS === 'android' ? 'light-content' : 'light-content'
          }
        />
          <MainNavigation />
    </OnlineStatusProvider>
  );
};

export default App;
