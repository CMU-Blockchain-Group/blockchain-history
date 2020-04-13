// import modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res, next) => {
    res.sendFile('./public/index.html');
});

app.listen(PORT);
console.log(PORT);