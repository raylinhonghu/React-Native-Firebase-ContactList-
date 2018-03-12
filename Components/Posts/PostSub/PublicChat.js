import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Container, Content, Button, Icon} from 'native-base';

export default class PublicChat extends React.Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-text" style={{ 
                color:tintColor
            }}/>
        )
    }

    render(){
        return(
            <View>
                <Text>
                   Nearby
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
  });
  