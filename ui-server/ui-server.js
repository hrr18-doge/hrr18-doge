var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var app = express();
var port = process.env.PORT || 4568;

// Decided not to use ejs view engine at this point in the project.
// app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/', express.static(path.join(__dirname + '/../public')));

require('./ui-routes.js')(app);

app.listen(port);
console.log('Server listening on port ' + port);

module.exports = app;
