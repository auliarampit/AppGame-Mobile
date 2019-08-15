import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MainNavigation from './src/Navigator/MainNavigation'
import {Provider} from 'react-redux'
import store from './src/Publics/Store'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation screenProps={this.state} />
    </Provider>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
  },
});

export default App;
