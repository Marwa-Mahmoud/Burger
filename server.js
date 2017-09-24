var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


var app = express();
var PORT = process.env.PORT ||  3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);

app.listen(PORT, function(){
    console.log("Listening to port: "+ PORT);
})