var express = require('express');
var app = module.exports = express();

/* GET home page. */
app.route('/').get(function(req, res) {
  res.render('index', { title: 'Express' });
});

app.route('/perfil').get(function(req, res) {
  res.send('perfil');
});

app.route('/registrar').get(function(req, res) {
  res.send('registrar');
});

app.route('/registrar').post(function(req, res) {
  res.redirect("/");
});
app.route('/autenticar').post(function(req, res) {
  res.redirect("/");
});
