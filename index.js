
const express = require('express')
const routes = require('./routes')
const config = require('config-lite')(__dirname)
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

routes(app)

app.listen(config.port, function(){
  console.log('working')
})
