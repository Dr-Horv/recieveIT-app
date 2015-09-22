let { createStore } = require('redux');
let app = require('./reducers');

let store = createStore(app);
