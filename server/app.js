var express = require("express")
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan');

const db = require('./config/dbconfig');
const patient = require('./routes/patient')
const health_facility = require('./routes/healthFacilty')
const health_worker = require('./routes/healthWorker')

const PORT = 5000

app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/patient', patient)
app.use('/health_facility', health_facility)
app.use('/health_worker', health_worker)



db.authenticate()
  .then(()=> console.log("DB connected"))
  .catch(err => console.log("Error:" + err))

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})