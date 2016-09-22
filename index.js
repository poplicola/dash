// Various Requires for Node Plugins
var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var dash_button = require('node-dash-button');
var IFTTT = require('node-ifttt-maker'),
    ifttt = new IFTTT('b6vGS5a9VbVZHAFaej6zR0');
	
// Sniffing for Dash buttons, for multiples see: https://github.com/hortinstein/node-dash-button
var dash = dash_button("74:c2:46:58:4b:11", null, 60000); //address from step above

// For now, just setting a dummy Dash ID up
var dash_id="74:c2:46:58:4b:11";

// Create web server
http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //since we are in a request handler function
  //we're using readFile instead of readFileSync
  fs.readFile('index.htm', 'utf-8', function(err, content) {
    if (err) {
      res.end('error occurred');
      return;
    }
    var temp = 'some temp';  //here you assign temp variable with needed value

    var renderedHtml = ejs.render(content, {temp: temp});  //get redered HTML code
    res.end(renderedHtml);
  });
}).listen(80);
// End create web server



// If a Dash button has been detected, run this thing
dash.on("detected", function (){
	
	if (dash_id==="74:c2:46:58:4b:11"){
		console.log(dash_id);
	}
    
	/*
	ifttt.request({
        event: 'button_pressed',
        method: 'GET',
        params: {
            'value1': 'test',
            'value2': 2
        }
    }, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('OK');
        }
    });
	*/
});