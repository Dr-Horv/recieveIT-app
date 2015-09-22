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

var MOCK_TEAMS = [
		{
			name: 'ProsIT',
			points: 1337
		},
		{
			name: 'WhoIsIT',
			points: 42
		},
		{
			name: 'LoseIT',
			points: 5
		},

	]

var ContestTab = React.createClass({

getInitialState() {
	var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	 return {
	    dataSource: ds.cloneWithRows(MOCK_TEAMS)
	  };
	},

	render() {
		return (
			<ScrollView>
	        	    <ListView
				      dataSource={this.state.dataSource}
				      renderRow={(team) => 
				      	<TouchableHighlight underlayColor='#09cdda' style={styles.teamWrapper}>
					      	<View style={styles.team}>
						      	<Text style={styles.entryTitle}>{team.points}</Text>
						      	<Text style={styles.teamName}>{team.name}</Text>
						    </View>
				      	</TouchableHighlight>
				      }
				    />
	        </ScrollView>
        )
	}
});

var styles = StyleSheet.create({
	teamWrapper: {
		flex: 1,
		borderBottomWidth: 1,
		borderStyle: 'solid' 
	},
	team: {
	    flexDirection: 'row',
	    justifyContent: 'space-around',
		padding: 10,
	},
	teamPoint: {

	},
	teamName: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

module.exports = ContestTab;
