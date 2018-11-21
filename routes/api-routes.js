const User = require('./models');

module.exports = function (app) {

    app.get('/api/users', function (req, res) {
      User.find({})
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
  
    app.post('/api/users', function (req, res) {
      User.create(req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
    app.put('/api/user/:id', function (req, res) {
      User.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
    app.delete('/api/users/:id', function (req, res) {
      User.findOneAndDelete({_id: req.params.id})
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
  }