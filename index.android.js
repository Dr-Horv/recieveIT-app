/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Image,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  ListView,
  ScrollView,
  View,
  Button,
} = React;

var ScrollableTabView = require('react-native-scrollable-tab-view');
var TabBar = require('./components/TabBar');
var MessageTab = require('./components/MessageTab');
var CalendarTab = require('./components/CalendarTab');
var ContestTab = require('./components/ContestTab');
var Modal = require('react-native-fs-modal');
var DetailedCalendarEntry = require('./components/DetailedCalendarEntry');
var Button = require('react-native-button');

var testProject = React.createClass({

  componentDidMount: function() {

  },

  getInitialState() {
   return {
      entry: null
    };
  },

  showModal(entry) {
    this.setState({entry}, () => {
      this.refs.modal.show(); 
    });
  },

  hideModal () {
    this.refs.modal.close();
  },
 
  render: function() {
    return (
        <View>
        <ScrollableTabView renderTabBar={() => <TabBar/>}>
          <MessageTab tabLabel="Messages" />
          <CalendarTab tabLabel="Calendar" showModal={this.showModal}/>
          <ContestTab tabLabel="Contest" />
        </ScrollableTabView>
        <Modal ref="modal" hideStatusBar={false}>
          <View>
              <DetailedCalendarEntry entry={this.state.entry}/>
              <Button style={styles.modalButton} onPress={this.hideModal.bind(this)} >Close modal</Button>
          </View>
        </Modal>
        </View>
      );
  },

});

var styles = StyleSheet.create({
  modalButton: {
    color: '#09cdda',
    borderColor: '#09cdda',
    borderWidth: 1,
    borderStyle: 'solid',
  }

});



AppRegistry.registerComponent('testProject', () => testProject);
