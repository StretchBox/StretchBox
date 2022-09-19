const request = require('request')
const database = require ('../model');

const apiController = {};


//This api takes in all keys from req.body then makes an individual call to the database
  //it then randomly selects one stretch from the call and returns it to res.locals
apiController.getExercises = (req, res, next) => {
  // console.log(req.body);
  let exerciseArr = Object.keys(req.body);
  console.log(exerciseArr);
  for (let i = 0; i < exerciseArr.length; i++){
      // declare query text
    database.query(`SELECT * FROM stretches WHERE ${exerciseArr[i]} = 'true'`)
    .then((data) => {
      res.locals.stretches = data.rows[Math.floor(Math.random() * (data.rows.length - 0))]
      next()
    })
    // ,function (err, result, fields) {
      // console.log(result);
      // console.log(Math.floor(Math.random() * (result.rows.length - 0)))
      // res.locals.stretches = result.rows[Math.floor(Math.random() * (result.rows.length - 0))];
      // console.log(res.locals.stretches)
      // next ()
    }
    // next ()
  }
//   next()
// }

// apiController.abdominals = (req, res, next) => {

// }

// apiController.abductors = (req, res, next) => {

// }

// apiController.adductors = (req, res, next) => {

// }

// apiController.biceps = (req, res, next) => {

// }

// apiController.calves = (req, res, next) => {

// }

// apiController.chest = (req, res, next) => {

// }

// apiController.forearms = (req, res, next) => {

// }

// apiController.glutes = (req, res, next) => {

// }

// apiController.hamstrings = (req, res, next) => {

// }

// apiController.lats = (req, res, next) => {

// }

// apiController.lower_back = (req, res, next) => {

// }

// apiController.middle_back = (req, res, next) => {

// }

// apiController.neck = (req, res, next) => {

// }

// apiController.quadriceps = (req, res, next) => {

// }

// apiController.traps = (req, res, next) => {

// }

// apiController.triceps = (req, res, next) => {

// }

module.exports = apiController
