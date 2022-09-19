const request = require('request')
const database = require ('../model');

const apiController = {};


//This api takes in all keys from req.body then makes an individual call to the database
  //it then randomly selects one stretch from the call and returns it to res.locals
apiController.getExercises = async (req, res, next) => {
  // console.log(req.body);
  const keysArr = Object.keys(req.body);
  console.log(keysArr);
  // create an array of stretch objs to send back
  const stretchArr = [];
  for (let i = 0; i < keysArr.length; i++){
    // grab the current key in keys array, and use that to get the value in req.body for that key
    let key = keysArr[i];
    let value = req.body[key];
    let text = `SELECT * FROM stretches WHERE ${key} = 'true'`;
    // query the database for that muscle for that # of stretches
    await database
      .query(text)
      .then((resp) => {
        let index = Math.floor(Math.random() * (resp.rows.length - 0));
        const stretch = {
          muscle: key,
          name: resp.rows[index].name,
          instructions: resp.rows[index].instructions
        }
        // save the returned stretch objs in stretchArr
        stretchArr.push(stretch);
        console.log('stretch array in query', stretchArr)
      })
      
      .catch(err => {
        console.log('create stretch array error');
        return next({
          log: 'create stretch array error',
          message: { er: 'create stretch error'}
        })
      })
    }
    // save stretchArr to res.locals to be sent back in the following middleware
    res.locals.stretches = stretchArr;
    console.log('final stretchArr', stretchArr);
    next ()
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
