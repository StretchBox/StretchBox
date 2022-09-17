const express = require('express');
// const request = require('request')
const app = express();
const port = 3000;

const apiController = require('./controllers/apiController')



const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', apiController.chest, (req, res) => {
 res.status(200).json(res.locals.chest);
});



app.listen(port, function () {
 console.log('App listening on port: ' + port);
});

