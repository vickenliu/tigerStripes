'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} = ReactNative;

import EditProfile from './editProfile'

var RepProfile = React.createClass({
  onSelect: function(person){
    this.props.navigator.push({
      title:'Edit',
      component:EditProfile,
      passProps:{person},
    })
  },
  render: function() {
    return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <TouchableHighlight
        onPress={this.onSelect.bind(this,{
          photne:'020-1234 456',
          email:'vicken@vickenliu.com',
          licence:'DQ234987',
          licenceExpiry:'25/12/2025',
          wof:'2/11/2016',
          rego:'23/12/2016'
        })}>
          <View style={styles.row}>
            <Text style={styles.label}>
              Phone:
            </Text>
            <Text style={styles.content}>
              020-1234 456
            </Text>
          </View>
        </TouchableHighlight>

        <View style={styles.row}>
          <Text style={styles.label}>
            Email:
          </Text>
          <Text style={styles.content}>
            vicken@vickenliu.com
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.innerRow}>
            <Text style={styles.label}>
              Driver Licence:
            </Text>
            <Text style={styles.content}>
              DQ234987
            </Text>
          </View>
          <View style={styles.innerRow}>
            <Text style={styles.label}>
              Licence Expiry:
            </Text>
            <Text style={styles.content}>
              25/12/2025
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Rego Expiry:
          </Text>
          <Text style={styles.content}>
            23/12/2016
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
            WOF Expiry:
          </Text>
          <Text style={styles.content}>
            2/11/2016
          </Text>
        </View>
      </View>
    </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  contentContainer: {
  padding: 10,
},
  container: {
    padding: 3,
    paddingLeft: 8,
  },
  row: {
    backgroundColor: 'gray',
    padding:10,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-start',
    marginBottom:5,
    flex:0,
  },
  innerRow:{
    marginTop:5,
  },
  column:{
    flex:1,
    flexDirection:'row',
  },
  label:{
    flexDirection: 'column',
    flex: 0.,
  },
  content:{
    flexDirection:'row',
    flex: 0.8,
  },
  spinner: {
    width: 30,
  },
});

module.exports = RepProfile;
