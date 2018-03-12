import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Right, Container, Content, Button, Icon, Body} from 'native-base';

import PostComponent from '../PostComponent';

var remotePosts = [
    {
        iconNumber:"1",
        postname:"Micheal Jackson",
        postcontent:"I always tell my children, You don't have to sing, you don't have to dance. Be who you want to be, as long as you're not hurting anybody. That's the main thing.",
        posttime:"2018/3/09",
        like:"4"
    },
    {
        iconNumber:"2",
        postname:"Donald J. Trump",
        postcontent:"Rasmussen and others have my approval ratings at around 50%, which is higher than Obama, and yet the political pundits love saying my approval ratings are “somewhat low.” They know they are lying when they say it. Turn off the show - FAKE NEWS!",
        posttime:"2018/3/08",
        like:"4"
    },
    {
        iconNumber:"3",
        postname:"Ellen DeGeneres",
        postcontent:"Remember, tonight is #DaylightSavings, so tomorrow it will actually be an hour later than you think it is, but feel like it’s earlier, or something. I don’t entirely get it. Just to be safe, I’m gonna go to bed at 5:45.",
        posttime:"2018/3/07",
        like:"4"
    }
]

export default class PostArea extends Component{
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="clipboard" style={{ 
                color:tintColor
            }}/>
        )
    }

    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#363636',}}>
                    <Body><Text style={{fontSize:20, color:'white'}}> 
                    Static Posts</Text></Body>
                </Header>

                <Content>
                  <PostComponent iconNumber={remotePosts[0].iconNumber}
                  postname={remotePosts[0].postname} posttime={remotePosts[0].posttime} 
                  postcontent ={remotePosts[0].postcontent}
                  likes="4" commenter="5" comment="6" />
                  <PostComponent iconNumber={remotePosts[1].iconNumber}
                  postname={remotePosts[1].postname} posttime={remotePosts[1].posttime} 
                  postcontent ={remotePosts[1].postcontent}
                  likes="4" commenter="5" comment="6" />
                  <PostComponent iconNumber={remotePosts[2].iconNumber}
                  postname={remotePosts[2].postname} posttime={remotePosts[2].posttime} 
                  postcontent ={remotePosts[2].postcontent}
                  likes="4" commenter="5" comment="6" />
                </Content>
            </Container>
        );
    }
}

