const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next){
  //res.send('read page')
  res.render('read')
})

module.exports = router
