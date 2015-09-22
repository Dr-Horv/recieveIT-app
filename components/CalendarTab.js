'use strict';

var React = require('react-native');
var moment = require('moment');
var util = require('../lib/util');

var {
  Image,
  StyleSheet,
  Text,
  ListView,
  ScrollView,
  View,
  TouchableHighlight,
  TouchableOpacity
} = React;

var MOCK_CALENDAR_ENTRIES = [
		{
			title: 'An awesome cool event',
			start: new Date(2015, 8, 21, 23, 50),
			end: new Date(2015, 8, 21, 23, 55),
			description: 'Lorem ipsum dolor sit amet, feugiat mediocrem assentior in duo, te dico consul qui, vim ex nihil melius noluisse. Aliquip eleifend vis ad, his justo mandamus ut. Impetus bonorum commune ne his. Sea odio integre cu. Odio decore duo in, te primis platonem has. Quidam facilisi dissentiunt eum an, est aliquam blandit scaevola ne. Te affert inciderint nec, nam brute feugait nominavi ex. Idque causae vis at. Duo elitr affert partiendo ex, pri brute officiis conclusionemque id, est ei eruditi theophrastus. Errem clita detracto his te, te vix natum suscipiantur. Cibo putent vix eu, melius vituperatoribus et ius, ut legimus efficiendi vel.'
		},
		{
			title: 'Another cool event',
			start: new Date(2015, 8, 22, 20, 0),
			end: new Date(2015, 8, 22, 22, 0),
			description: 'Wololo wololo aaeyyha'
		}

	]

var CalendarTab = React.createClass({

getInitialState() {
	var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	 return {
	    dataSource: ds.cloneWithRows(MOCK_CALENDAR_ENTRIES),
	    entry: null
	  };
	},

	pressedEntry(entry) {
		this.props.showModal(entry);
	},

	elipsisString(string, limit){
		if(string.length > 100){
			return string.substring(0, 100) + '...';
		} else {
			return string;
		}
	},

	render() {
		return (
			<ScrollView>
	        	    <ListView
				      dataSource={this.state.dataSource}
				      renderRow={(entry) => 
				      	<TouchableHighlight underlayColor='#09cdda' style={styles.entry} onPress={() => this.pressedEntry(entry)} >
					      	<View>
						      	<Text style={styles.entryTitle}>{entry.title}</Text>
						      	<Text style={styles.timestamp}>Start: {util.prettifyDate(entry.start)} </Text>
						      	<Text style={styles.timestamp}>End: {util.prettifyDate(entry.end)} </Text>
						      	<Text>{this.elipsisString(entry.description)}</Text>
						    </View>
				      	</TouchableHighlight>
				      }
				    />
	        </ScrollView>
        )
	}
});

var styles = StyleSheet.create({
	entry: {
		paddingBottom: 10,
		paddingLeft: 10
	},
	entryTitle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	timestamp: {

	}
});

module.exports = CalendarTab;
