const db = require('../models');
const express = require('express');

module.exports = function (app) {

  // app.get('/api/index', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
  //     if (err) {
  //       res.status(500).send(err)
  //     }
  //   })
  // })

// Routes for github authentication


    app.get('/api/users', function (req, res) {
      db.User.find({})
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
  
    app.post('/api/users', function (req, res) {
      db.User.create(req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
    app.put('/api/user/:id', function (req, res) {
      db.User.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
    app.delete('/api/users/:id', function (req, res) {
      db.User.findOneAndDelete({_id: req.params.id})
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
    });
  
  }