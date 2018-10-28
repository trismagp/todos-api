var express   = require('express'),
    app       = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var todosRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send('hello')
});

app.use('/api/todos',todosRoutes);

app.listen(port, function(){
  console.log("app listening to " + port);
})
