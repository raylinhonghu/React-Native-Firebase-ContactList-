import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Container,Input, Content, Button, Icon,Card,CardItem,Body,Thumbnail} from 'native-base';


export default class ProfileComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            year:new Date().getFullYear(),
            month:new Date().getMonth(),
            date:new Date().getDate(),
        }
    }

    render(){
        return(
            <Card>
                <CardItem style={{ backgroundColor:'white',
                    height:180,justifyContent:'center',alignItems:'center'}}>
                    <Left>
                    <Thumbnail source={require('./assets/icon/1.png')} style={{
                        height:130,width:130,borderRadius:65,
                        borderColor:'#474747',borderWidth:7}}/>
                    </Left>
                    <Body style={{backgroundColor:'#aba7ab',padding:20,
                    borderRadius:20,justifyContent:'center',borderColor:'#474747',
                    borderWidth:5,alignItems:'flex-start'}}>
                        <Text style={{fontSize:20,color:'black'}}>
                        <Icon name="clock" style={{color:'black'}}/>     
                        {this.state.year.toString()}/{this.state.month.toString()}/{this.state.date.toString()}
                        </Text>
                        <Text style={{fontSize:20,color:'black'}}>
                        <Icon name="ios-pin" style={{color:'black'}}/>     Victoria
                        </Text>
                        <Text style={{fontSize:20,color:'black'}}>
                        <Icon name="ios-partly-sunny" style={{color:'black'}}/>   Sunny
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

