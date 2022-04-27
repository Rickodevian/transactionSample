/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text
} from 'react-native';
import CodePush from 'react-native-code-push';
const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Transaction from './src/Screens/Transaction/Transaction';

const App: () => Node = props => {
  React.useEffect(() => {
    CodePush.sync(
      {installMode: CodePush.InstallMode.IMMEDIATE},
      syncWithCodePush,
    );
  }, []);
  const syncWithCodePush = status => {
    console.log('Codepush sync status', status);
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#f5f5f5',
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.container}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>This is how many times the text was changed: 0</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CodePush(CODE_PUSH_OPTIONS)(App);
