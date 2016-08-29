var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)
var localStrategy = require('passport-local')

module.exports = {
  get: get,
  index: index,
  login: login,
  postLogin: postLogin
}

function postLogin(req, res) {
  console.log(req.body.name, req.body.email)
  res.sendStatus(200)
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('display', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function index (req, res) {
  res.render('index')
}

function login (req, res) {
  res.render('login')
}

function storeSession (req, res) {
  req.session('index')
  }

function loggedIn (req, res) {
  req.render('loggedIn')
}
