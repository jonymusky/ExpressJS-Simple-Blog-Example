var app = require("express")();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var routes = require('./routes/index');
app.use('/', routes);


app.listen(process.env.PORT || 3002);