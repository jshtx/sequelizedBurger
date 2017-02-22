// Import the model (burger.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    var query = {};
  
    db.burgers.findAll({include: [db.burgers]}).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  //post rout
  app.post("/", function(req, res) {
    db.burgers.create(req.body).then(function(dbBurgers) {
      res.json(dbPost);
    });
  });


  // PUT 
  app.put("/:id", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });
};


