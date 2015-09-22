var moment = require('moment');

function prettifyDate(date) {
	return moment(date).format('ddd, MMM D HH:mm');
}

var api = {
	prettifyDate: prettifyDate	
}

module.exports = api;