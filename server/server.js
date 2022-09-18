const express = require('express');
// const request = require('request')
const app = express();
const port = 3000;

const databaseQuery = require('./db-population')
const apiController = require('./controllers/apiController')



const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', apiController.chest, (req, res) => {
 res.sendStatus(200);
});



app.listen(port, function () {
 console.log('App listening on port: ' + port);
});

