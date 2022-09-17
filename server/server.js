const express = require('express');
const request = require('request')
const app = express();
const port = 3000;

const apiController = require('./controllers/apiController')



const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

const options = {
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=chest',
  headers: {
    'X-Api-Key': 'yPvp7DZtvxsNwvYebl/CbA==Qp9XuU0upuR0x5BD'
  }
}

function callback(error, req, res) {
  if(error) return console.error('Request failed:', error);
  else if(req.statusCode != 200) return console.error('Error:', req.statusCode, res.toString('utf8'));
  console.log(res)
  }

request(options, callback)

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/', apiController.chest, (req, res) => {
 res.status(200).send('Hello World from the server!');
});



app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
