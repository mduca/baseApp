// NodeJS REST Server

'use strict'
// Initialize the core components in Express
var express = require('express')
  , app     = express()

app.get('/', function (req, res) {
  res.send("Hello World")
})

app.listen(3000)
