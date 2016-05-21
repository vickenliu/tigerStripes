/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  View,
} from 'react-native';
import RepProfile from './repProfile'

var Landing = React.createClass({

  onSelect: function(){
    this.props.navigator.push({
      title:'Scully',
      component: RepProfile,
    })
  },

  render: function() {
    var TouchableElement = TouchableHighlight;
    return (
      <View style={styles.subcontainer}>
        <View style={styles.login}>
            <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             placeholder='Email'
           />
        </View>
        <View style={styles.login}>
            <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             placeholder='Password'
           />
        </View>
        <TouchableElement
        onPress={this.onSelect}>
          <Text style={styles.welcome}>
            LOG IN
          </Text>
        </TouchableElement>


      </View>
    );
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subcontainer:{
    marginTop:100,
  },
  login:{
    flex:0.5,
    marginTop:5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#00ff00',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Landing;
