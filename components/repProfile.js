'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = ReactNative;

var RepProfile = React.createClass({
  render: function() {
    return (
      <View style={styles.searchBar}>
        <View style={styles.row}>
          <Text style={styles.welcome}>
            Phone: 020-1234 456
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.welcome}>
            Email: vicken@vickenliu.com
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.welcome}>
            Driver Licence: DQ234987
          </Text>
          <Text style={styles.welcome}>
            Licence Expiry: 25/12/2025
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.welcome}>
            Rego Expiry: 23/12/2016
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.welcome}>
            WOF Expiry: 2/11/2016
          </Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  searchBar: {
    marginTop: 64,
    padding: 3,
    paddingLeft: 8,
  },
  row: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    flex: 1,
    height: 30,
    marginBottom:5,
  },
  welcome:{
    flex: 0.7,
    flexDirection:'row',
  },
  spinner: {
    width: 30,
  },
});

module.exports = RepProfile;
