
const express = require('express')
const routes = require('./routes')
const config = require('config-lite')(__dirname)

const app = express()

routes(app)

app.listen(config.port, function(){
  console.log('working')
})
