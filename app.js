var  express = require("express"),
     app = express(),
     bodyParser = require("body-parser"),
     mongoose = require("mongoose"),
     flash = require("connect-flash"),
     passport = require("passport"),
     LocalStrategy = require("passport-local"),
     methodOverride = require("method-override");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());

//REQUIRING ROUTES     
var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Home Page Has Started!");
});