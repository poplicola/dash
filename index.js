// Various Requires for Node Plugins
// var http = require('http');
var ejs = require('ejs');
var express = require('express');
var fs = require('fs');
var dash_button = require('node-dash-button');
var IFTTT = require('node-ifttt-maker'),
    ifttt = new IFTTT('b6vGS5a9VbVZHAFaej6zR0');
	
var app = express();
	
// Sniffing for Dash buttons, for multiples see: https://github.com/hortinstein/node-dash-button
var dash = dash_button("74:c2:46:58:4b:11", null, 60000); //address from step above

// For now, just setting a dummy Dash ID up
var dash_id="74:c2:46:58:4b:11";


// Start Express server
app.get('/', function(req,res) {
	res.send('Hello World!');	
})

app.get('/index.htm', function(req,res){
	// Sending data to static files
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('public/index.htm', 'utf-8', function(err, content) {
	  if (err) {
	    res.end('error occurred');
	    return;
	  }

	  var renderedHtml = ejs.render(content, {dash_id: dash_id});  //get redered HTML code
	  res.end(renderedHtml);
	});
	// End sending data to static files
})


app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
})


app.use(express.static('public'));
// End Express server


// If a Dash button has been detected, run this thing
dash.on("detected", function (){
	
	if (dash_id==="74:c2:46:58:4b:11"){
		console.log(dash_id);
	}

});