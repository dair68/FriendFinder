var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var friends = [
    {
        name: "Ryan",
        description: "Met through the coding bootcamp. My boyfriend."
    },
    {
        name: "Sam",
        description: "One of my roommates. Met him through church."
    },
    {
        name: "Neil",
        description: "One of my roommates. Met through GME."
    }
];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up routing
var htmlRoutes = require("./app/routing/htmlRoutes");
htmlRoutes(app, path);

//displays JSON of all possible friends
app.get("/api/friends", function (req, res) {
    res.json(friends);
});

//updates stored friend data
app.post("/api/friends", function(req, res) {
    var friend = req.body;
    friends.push(friend);

    //displaying friends
    console.log(friends);
});

//listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});