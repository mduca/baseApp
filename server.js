// NodeJS REST Server

'use strict'
// Initialize the core components in Express
var express = require('express')
  , app     = express()

app.use(express.static(__dirname + '/'))

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now())
  next()
})

// Routes
  
app.get('/', function (req, res) {
  res.sendFile("./index.html")
})
  
app.post('/', function (req, res) {
  res.send("Got a POST request")
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
