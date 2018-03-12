import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import PostMain from './Components/Posts/PostMain';

const AppStackNavigator = StackNavigator({
  Post:{screen: PostMain},
})


export default class App extends Component {
  render() {
    return(
      <AppStackNavigator/>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
