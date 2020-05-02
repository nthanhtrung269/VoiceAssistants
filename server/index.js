var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.post('/voice', function (req, res) {
    console.log(req.body);
    res.json({
        message: getResponseMessage(req.body.message)
    });
});

function getResponseMessage(message) {
    if (message === 'hello') {
        return 'hey there, my name is voice assistants';
    } else if (message === 'goodbye') {
        return 'bye bye';
    } else {
        return message;
    }
}

app.listen(8000, function () {
    console.log('listening on port 8000');
});