import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import GistScreen from './src/screens/GistScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <GistScreen />
    </SafeAreaView>
  );
};

export default App;
