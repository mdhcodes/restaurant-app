// Create the router for the app, and export the router at the end of your file
var Burger = require('../models/burger');

module.exports = function(app) {

  // API route to display all burgers.
  app.get('/', function(req, res) {
    Burger.selectAll(function(data) { // closure - function remembers its outer scope
      //console.log(data);
      res.render('index', {burgers: data});
    });
  });


  // API route to insert a new burger
  app.post('/', function(req, res) {
    var burger = {
      burger_name: req.body.burger
    };
    console.log('Body:', burger);
    Burger.insertOne(burger, function(data) {
      res.redirect('/');
    });
  });


  // API route to update a burger devoured state as true.
  app.put('/', function(req, res) {
    // set is_devoured to true || 1
    var values = req.body.is_devoured;
    var condition = {
      id: req.body.id
    }
    console.log('Values:', values);
    console.log('ID:', condition.id);
    Burger.updateOne(values, condition, function(data) {
      res.redirect('/');
    });
  });

};