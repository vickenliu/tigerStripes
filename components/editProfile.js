'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  ScrollView,
  DatePickerIOS,
  TextInput,
  Heading,
} = ReactNative;

var EditProfile = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };
  },
  getInitialState: function() {
    return {
      person: Object.assign({},this.props.person),
      date: this.props.date,
      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    };
  },

  onDateChange: function(date) {
    this.setState({date: date});
  },

  onTimezoneChange: function(event) {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  },

  render: function() {
    return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Phone:
          </Text>
          <TextInput
            keyboardType = 'phone-pad'
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           value={this.state.person.phone}
         />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Email:
          </Text>
          <TextInput
            keyboardType = 'email-address'
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           value={this.state.person.email}
         />
        </View>

        <View style={styles.row}>
          <View style={styles.innerRow}>
            <Text style={styles.label}>
              Driver Licence:
            </Text>
            <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             placeholder='DQ234987'
           />
          </View>
          <View style={styles.innerRow}>
            <Text style={styles.label}>
              Licence Expiry:
            </Text>
            <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             placeholder='25/12/2025'
           />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Rego Expiry:
          </Text>
          <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           placeholder='25/12/2025'
         />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>
            WOF Expiry:
          </Text>
          <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           placeholder='25/12/2025'
         />
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

module.exports = EditProfile;
