'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  ListView,
  ScrollView,
  View,
} = React;

var MOCK_MESSAGES = [
	{title: 'A message', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
	{title: 'Another message', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'}
]



var MessageTab = React.createClass({

getInitialState() {
	var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	 return {
	    dataSource: ds.cloneWithRows(MOCK_MESSAGES),
	  };
	},

	render() {
		return (
			<ScrollView>
	        	    <ListView
				      dataSource={this.state.dataSource}
				      renderRow={(message) => 
				      	<View style={styles.messageItem}>
					      	<Text style={styles.messageTitle}>{message.title}</Text>
					      	<Text>{message.content}</Text>
				      	</View>
				      }
				    />
	        </ScrollView>
        )
	}
});

var styles = StyleSheet.create({
	messageItem: {
		paddingBottom: 10,
		marginLeft: 10
	},
	messageTitle: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});

module.exports = MessageTab;