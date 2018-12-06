module.exports = function (app, path) {
    //console.log("setting up html routes");

    //pulls up home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //pulls up survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
