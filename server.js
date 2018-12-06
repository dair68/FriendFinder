var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up routing
var htmlRoutes = require("./app/routing/htmlRoutes");
htmlRoutes(app, path);

var apiRoutes = require("./app/routing/apiRoutes");
apiRoutes(app, path);

//listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});