import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const wall = require('./images/wall.png');
const petra = require('./images/petra.png');
const redeemer = require('./images/redeemer.png');
const machu = require('./images/machu.png');
const chichen = require('./images/chichen.png')
const colosseum = require('./images/colosseum.png');
const taj = require('./images/taj.png');

const timeline = [
  {title: 'Great Wall of China', image: wall},
  {title: 'Petra', image: petra},
  {title: 'The Redeemer', image: redeemer},
  {title: 'Machu Piccu', image: machu},
  {title: 'Chichen Itza', image: chichen},
  {title: 'Colosseum', image: colosseum},
  {title: 'Taj Mahal', image: taj},
]

export default class App extends Component {
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  render() {
    return(
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
          {timeline.map((post, index) =>
            <PostContainer key={index} post={post} onPress={this.showImage} />
          )}
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    );
  }

  renderViewer() {
    const { selected, position } = this.state;
    if(selected) {
      return (
        <PhotoViewer post={selected} position={position} onClose={this.closeViewer} />
      );
    }
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1, 
  },
});
