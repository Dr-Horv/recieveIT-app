var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var util = require('../lib/util');

var DetailCalendarEntry = React.createClass({
  render() {
    if(this.props.entry === null){
      return <View></View>;
    }

    return (
        <View style={styles.entry}>
              <Text style={styles.entryTitle}>{this.props.entry.title}</Text>
              <Text style={styles.timestamp}>Start: {util.prettifyDate(this.props.entry.start)} </Text>
              <Text style={styles.timestamp}>End: {util.prettifyDate(this.props.entry.end)} </Text>
              <Text>{this.props.entry.description}</Text>
          </View>
      )
  }
});

var styles = StyleSheet.create({
  entry: {
    padding: 10,
  },
  entryTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  timestamp: {

  }
});

module.exports = DetailCalendarEntry;