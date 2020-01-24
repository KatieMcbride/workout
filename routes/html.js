    
var express = require('express');
var app     = express();
var router  = express.Router();
const path = require("path");

    router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
    });


    // route for exercise.html
    router.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/exercise.html"));
    });

    // route for stats.html
    router.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/stats.html"));
    });

module.exports = router;

