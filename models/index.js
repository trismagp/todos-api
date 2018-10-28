var mongooose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise; // allow to chain commands instead of callback functions

module.exports.Todo = require("./todo");
