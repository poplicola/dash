var dash_button = require('node-dash-button');
var IFTTT = require('node-ifttt-maker'),
    ifttt = new IFTTT('b6vGS5a9VbVZHAFaej6zR0');
var dash = dash_button("74:c2:46:58:4b:11", null, 60000); //address from step above


dash.on("detected", function (){
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
});
