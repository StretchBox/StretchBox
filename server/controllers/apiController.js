



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