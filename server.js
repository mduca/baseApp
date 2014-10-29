// NodeJS REST Server

'use strict'
// Initialize the core components in Express
var express   = require('express')
  , mongoose  = require('mongoose')
  , app       = express()

mongoose.connect('mongodb://localhost/baseApp', function(err) {
  if(err) console.log("Error: " + err)
  else console.log("DB connected")    
})

var baseAppSchema = mongoose.Schema({
  name: String
})

var BaseAppSchema = mongoose.model('BaseAppSchema', baseAppSchema)

app.use(express.static(__dirname + '/'))

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now())
  next()
})

////////////// Routes

app.get('/', function (req, res) {
  res.sendFile("./index.html")
})

app.get('/api', function(req, res) {
  res.json({version: "0.0.0"})
}) 

app.get('/api/baseApp', function(req, res) {
  BaseAppSchema.find(function(err, data) {
    res.json(data)  
  })     
}) 

app.post('/api/baseApp', function (req, res) {
  res.json({message: "Got a POST request"})
})
  
app.put('/api', function (req, res) {
  res.send("Got a PUT request at /api")
})
  
app.delete('/api/user/:id', function (req, res) {
  res.send("Got a DELETE request")
})


// Server Configuration
var server = app.listen(3000, function() {

  var host = server.address().address
    , port = server.address().port

  console.log('Listening at http://%s:%s', host, port)   
})
