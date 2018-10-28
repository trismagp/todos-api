var express   = require('express'),
    app       = express(),
    port = process.env.PORT || 3000;

var todosRoutes = require('./routes/todos');

/**
 * Get port from environment and store in Express.
 */

// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);


app.get('/', function(req, res){
    res.send('hello')
});

app.use('/api/todos',todosRoutes);

app.listen(port, function(){
  console.log("app listening to " + port);
})
