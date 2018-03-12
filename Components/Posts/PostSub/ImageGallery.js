import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {Header, Left, Right, Container, Content, Button, Icon,Body} from 'native-base';


const images = [
  require('../assets/img/1.png'),
  require('../assets/img/2.png'),
  require('../assets/img/3.png'),
  require('../assets/img/4.png'),
  require('../assets/img/5.png'),
  require('../assets/img/6.png'),
  require('../assets/img/7.png'),
  require('../assets/img/8.png'),
  require('../assets/img/9.png'),
  require('../assets/img/10.png'),
  require('../assets/img/11.png'),
  require('../assets/img/12.png'),
]

var {width,height} = Dimensions.get('window')

export default class ImageGallery extends Component {

  constructor(props){
    super(props);
    this.state = {
      img: images
    }
  }

  componentWillMount(){
    setTimeout(function(){
      var ImageChange = images;
      ImageChange.sort(()=>{
        return 0.5-Math.random();
      })
    }, 1000)
  }

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
        <Icon name="image" style={{ 
            color:tintColor
        }}/>
    )
  }

  renderGallery = () => {
    return images.map((pic,index)=>{
      return(
          <Image source={pic} key={index} style={[
            {width:(width/2)},
            {height:(height/3)}]}/>
      )
    })
  }

  render() {
    return (
      <ScrollView 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
         style={{flexDirection:'row',flexWrap:'wrap'}}>
        {this.renderGallery()}
      </ScrollView>
    );
  }
}

