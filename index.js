var express   = require('express'),
    app       = express();

/**
 * Get port from environment and store in Express.
 */

// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);
var port = 3000;

app.get('/', function(req, res){
    res.send('hello')
});


app.listen(port, function(){
  console.log("app listening to " + port);
})
