#!/usr/bin/env node
var express = require('express')
, path = require('path')
, bodyParser = require('body-parser')
, app = express()
, routes = require('./routes')
, cron = require('./cron')
, cronjob = new cron()

// Set static files
//app.use(express.static('app'))
//app.use(bodyParser.json())

// Set routes
app.use('/', routes)
app.set('port', process.env.PORT || 3000)

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening at http://localhost:' + server.address().port)
})