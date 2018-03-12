import React, { Component } from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Header, Left, Right, Container, Content, Button, Icon} from 'native-base';
import {TabNavigator} from 'react-navigation';
import ImageGallery from './PostSub/ImageGallery';
import PostArea from './PostSub/PostArea';
import Contact from './PostSub/Contact';
import PublicChat from './PostSub/PublicChat';

// not a React Component, if add {} to import screen 
const AppTabNavigator = TabNavigator({
   
    Contact:{
        screen: Contact
    },
    PostArea:{
        screen: PostArea
    },
    PublicChat: {
        screen: PublicChat
    },
    
    ImageGallery: {
        screen: ImageGallery
    },
},
{
    animationEabled: true,
    swipeEnabled :false,
    tabBarPosition:'bottom',
    tabBarOptions:{
      style:{
        ...Platform.select({
          android:{
            backgroundColor:'#2C3A47'
          }
        })
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel:false,
      showIcon:true
    }
})

export default class PostMain extends Component{

    static navigationOptions = {
        title: 'React to Devlift Application'
    }

    render(){
        return(
            <AppTabNavigator/>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
