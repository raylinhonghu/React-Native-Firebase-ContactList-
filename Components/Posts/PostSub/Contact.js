import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';
import {Header, Left, Right, Container, Content, Button,Body,Icon,Input, Label, List, ListItem} from 'native-base';
import ProfileComponent from '../ProfileComponent';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAHuZPpQaZBbYCMk6yWtkVStlRmBQ6i5N4",
    authDomain: "contact-dbbd9.firebaseapp.com",
    databaseURL: "https://contact-dbbd9.firebaseio.com",
    projectId: "contact-dbbd9",
    storageBucket: "contact-dbbd9.appspot.com",
    messagingSenderId: "1047566742231"
};
firebase.initializeApp(config);

var data = [];

export default class Contact extends Component{

    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged:(r1, r2) => r1!==r2
        });

        this.state = {
            listViewData: data,
            emptyString:'',
            searchString:'',
        }
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-people" style={{ 
                color:tintColor
            }}/>
        )
    }


    componentDidMount(){
        var that = this
        firebase.database().ref('/users').on('child_added',function(serverUser){
            
            var newUser = [...that.state.listViewData]
            newUser.push(serverUser)
            that.setState({listViewData:newUser})
        })
    }

    addUser (name){
        
        var key  = firebase.database().ref('/users').push().key;
        firebase.database().ref('/users').child(key).set({username:name})
    }

    async deleteContact(data,secId,rowId,rowMap){

        await firebase.database().ref('users/' + data.key).remove();

        rowMap[`${secId}${rowId}`].props.closeRow();
        var tempRows = [...this.state.listViewData];
        tempRows.splice(rowId,1)
        this.setState({listViewData: tempRows})
    }
    
    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#363636',}}>
                    <Body><Text style={{fontSize:20, color:'white'}}> 
                    Add Contact, Swipe Delete, Update Firebase</Text></Body>
                </Header>
                <ProfileComponent/>
                <Header style={{backgroundColor:'white',width:420,
                justifyContent:'center',alignItems:'center'}}>
                    <Input 
                    placeholder="Add Friend"
                    onChangeText={(cur)=>this.setState({emptyString:cur})}
                    style={{backgroundColor:'white', marginTop:2,
                    borderWidth:2, borderColor:'black'}}/>
                    <Button transparent
                    onPress={this.addUser.bind(this,this.state.emptyString)}>
                        <Icon name="ios-person-add" 
                        style={{color:'black', fontSize:50, width:50}}/>
                    </Button>
                </Header>

                <Content>
                    <List enableEmptySections
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={data=>
                        <ListItem style={{ padding:55, backgroundColor:'#485460'
                        ,marginVertical: 2}}>
                            <Text style={{fontSize:20, color:'white'}}>
                                {data.val().username}
                            </Text>
                        </ListItem>
                    }
                    renderRightHiddenRow={(data,secId,rowId,rowMap)=>
                        <Button danger 
                        onPress={()=>this.deleteContact(data,secId,rowId,rowMap)}>
                            <Icon name="trash"/> 
                        </Button>
                    }

                    rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },
  });
  