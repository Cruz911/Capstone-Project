var express = require("express")
const app = express()

const db = require('./config/dbconfig');
const PORT = 5000

db.authenticate()
  .then(()=> console.log("DB connected"))
  .catch(err => console.log("Error:" + err))

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})