import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Container,Input, Content, Button, Icon,Card,CardItem,Body,Thumbnail} from 'native-base';

export default class PostComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            like: false,
            star: false,
            icons : [
                require('./assets/img/1.png'),
                require('./assets/img/2.png'),
                require('./assets/img/3.png'),
                require('./assets/img/4.png'),
                require('./assets/img/5.png'),
                require('./assets/img/6.png'),
                require('./assets/img/7.png'),
                require('./assets/img/8.png'),
                require('./assets/img/9.png'),
                require('./assets/img/10.png'),
                require('./assets/img/11.png'),
                require('./assets/img/12.png'),
              ]
        }

    }

    liked = () => {
        var likeStatus = this.state.like;
        likeStatus = !likeStatus;
        this.setState({like:likeStatus})
    }

    starred = () => {
        var starStatus = this.state.star;
        starStatus = !starStatus;
        this.setState({star:starStatus})
    }

    render(){
        return(
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail
                            source={this.state.icons[this.props.iconNumber]}/>
                        <Body>
                            <Text>{this.props.postname}</Text>
                            <Text>{this.props.posttime}</Text>
                        </Body>
                    </Left>
                    <Button transparent>
                        <Icon name="ios-arrow-down"/>
                    </Button>
                </CardItem>

                <CardItem>
                    <Text>
                       {this.props.postcontent}
                    </Text>
                </CardItem>

                <CardItem style={{marginLeft:200, height: 50}}>
                    <Button transparent 
                    onPress={ this.liked.bind(this)}>
                        <Icon name="thumbs-up" style={
                            this.state.like == true ? {color:'red'}:{color:'black'}
                        }/>
                    </Button>
                    <Button transparent 
                    onPress={this.starred.bind(this) }>
                        <Icon name="ios-star" style={
                            this.state.star == true ? {color:'yellow'}:{color:'black'}
                        }/>
                    </Button>
                    <Button transparent>
                        <Icon name="ios-menu" style={{color:'black'}}/>
                    </Button>
                </CardItem>

                <CardItem style={{height:40,alignItems:'center'}}>
                    <Icon name="ios-thumbs-up-outline"/>
                    <Text style={{fontWeight:'bold',fontSize:16}}>{this.props.likes}</Text>
                </CardItem>

                <CardItem style={{height:30,marginBottom:10}}>
                    <Input placeholder="comment" style={{backgroundColor:'#d1d8e0', borderRadius:0}} /> 
                </CardItem>

                <CardItem>
                    <Text style={{fontWeight:'bold'}}>{this.props.commenter} </Text>
                    <Text>{this.props.comment}</Text>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
  });
  