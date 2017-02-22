var express = require("express");

var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
      db.burgers.findAll({raw: true}).then(function(dbBurgers) {
        var data = {
          burgers: dbBurgers
        };
        res.render("index", data);
     });
});

router.post("/", function(req, res) {
    db.burgers.create({
        burger_name: req.body.name,
        devoured: false
    }).then(function(dbBurgers) {
        res.redirect("/");    
    });
});

router.put("/:id", function(req, res) {
  var id = req.params.id;
  db.burgers.update({devoured : true}, {
    where: {id: id}
  }).then(function(dbBurgers) {
    res.redirect("/");  
  });
});


// Export routes for server.js to use.
module.exports = router;

