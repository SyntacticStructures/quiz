var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./static"));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8000);
app.get('/squares', function(req, res) {
 res.render("squares.ejs");
})
app.get('/canvas', function(req, res) {
 res.render("canvas.ejs");
})
app.listen(app.get('port'), function() {
  	console.log('listening on port: ', app.get('port'));
});