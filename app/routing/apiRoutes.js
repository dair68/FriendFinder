var friends = require("../data/friends");

module.exports = function (app, path) {
    //console.log("setting up api routes");

    //displays JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //updates stored friend data and finds best match
    app.post("/api/friends", function (req, res) {
        var friend = req.body;

        //finding friend with lowest absolute score difference
        var scores = friend.scores; 
        var scoreDifferences = [];
        var minDifference = 40;
        var best = friends[0];

        //calculating the score difference for everyone in friends list
        for(var i=0; i<friends.length; i++) {
            var difference = 0;

            for(var j=0; j<scores.length; j++) {
                difference += Math.abs(friends[i].scores[j] - scores[j]);
            }

            scoreDifferences.push(difference);
            if(difference < minDifference) {
                minDifference = difference;
                best = friends[i];
            }
        }

        //console.log(scoreDifferences);
        //console.log(minDifference);
        //console.log(best);

        //adding newest person to friend data
        friends.push(friend);

        //displaying friends
        console.log("friend added");
        
        res.json(best);
    });
}