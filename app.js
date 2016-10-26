/**
 * Created by PY028031 on 10/21/2016.
 */

var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

var db ;

if (process.env.ENV === "Test") {
    db = mongoose.connect("mongodb://localhost/bookAPI_Test");
}
else {
    db = mongoose.connect("mongodb://localhost/bookAPI");
}

var Book = require("./models/bookModel");
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require("./Routes/bookRoutes")(Book);


app.use("/api/books", bookRouter);
//app.use("/api/authors", authorRouter);

app.get('/', function (req, res) {
    res.send("Welcome to my API launched from gulp!!");
});

app.listen(port, function () {
    console.log("Gulp is running my app on port: " + port);
});

module.exports = app;