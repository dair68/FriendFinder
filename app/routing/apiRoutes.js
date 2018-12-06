var friends = require("../data/friends");

module.exports = function (app, path) {
    //console.log("setting up api routes");

    //displays JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //updates stored friend data
    app.post("/api/friends", function (req, res) {
        var friend = req.body;
        friends.push(friend);

        //displaying friends
        console.log("friend added");
    });
}