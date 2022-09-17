const request = require('request')


const apiController = {};

function fetchApi(variable) {
  let muscleGroup = variable
  const options = {
    url: 'https://api.api-ninjas.com/v1/exercises?type=stretching&muscle=' + muscleGroup,
    headers: {
      'X-Api-Key': 'yPvp7DZtvxsNwvYebl/CbA==Qp9XuU0upuR0x5BD'
    }
  }
  
  function callback(error, response, body) {
    if(error) return console.error('Request failed:', error);
    else if(response.statusCode != 200) return console.error('Error:', body.statusCode, response.toString('utf8'));
    const exercises = JSON.parse(body)
  
    // console.log(exercises)
    //create empty arr
    let returnArr = []
    //loop through body array
    for (let i = 0; i < exercises.length; i++){
      const {name, muscle, instructions} = exercises[i]
      returnArr.push({
        name: name,
        muscle: muscle,
        insctructions: instructions
      })
    }
    // console.log(returnArr);
    //
    return returnArr;
    }
  let test = request(options, callback, muscleGroup)
  console.log(test);
} 

apiController.abdominals = (req, res, next) => {

}

apiController.abductors = (req, res, next) => {

}

apiController.adductors = (req, res, next) => {

}

apiController.biceps = (req, res, next) => {

}

apiController.calves = (req, res, next) => {

}

apiController.chest = (req, res, next) => {
  let muscleGroup = 'chest';
  res.locals.chest = fetchApi(muscleGroup);
  
  next()
}

apiController.forearms = (req, res, next) => {

}

apiController.glutes = (req, res, next) => {

}

apiController.hamstrings = (req, res, next) => {

}

apiController.lats = (req, res, next) => {

}

apiController.lower_back = (req, res, next) => {

}

apiController.middle_back = (req, res, next) => {

}

apiController.neck = (req, res, next) => {

}

apiController.quadriceps = (req, res, next) => {

}

apiController.traps = (req, res, next) => {

}

apiController.triceps = (req, res, next) => {

}

// const options = {
//   url: 'https://api.api-ninjas.com/v1/exercises?muscle=chest',
//   headers: {
//     'X-Api-Key': 'yPvp7DZtvxsNwvYebl/CbA==Qp9XuU0upuR0x5BD'
//   }
// }
// function callback(error, req, res) {
//   if(error) return console.error('Request failed:', error);
//   else if(req.statusCode != 200) return console.error('Error:', req.statusCode, res.toString('utf8'));
//   console.log(res)
//   return res
//   }

// request(options, callback)

module.exports = apiController