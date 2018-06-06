module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send('haoshouyi8.com is working!!!')
  })
  app.use('/read', require('./read'))
}
