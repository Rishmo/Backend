const express = require("express");
const app = express();
const path =  require("path"); // requiring path for ejs (for running server outside the directory)

const port= 8080;


// sercing static files

// only runs under ejsdir
app.use(express.static("public")); // by default all static files takes express from public folder

//can run from anywhere
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));



app.set("view engine", "ejs"); // express internally require ejs
app.set("views", path.join(__dirname, "/views")); // for running server outside the directory
app.get("/", (req, res) => {
    // res.send("This is home");
    res.render("home.ejs");

});

// for instagram username
app.get("/ig/:username", (req, res) => {
    const followers =["Ravi","Tulika","Nikita"];
    let { username } = req.params; // it is an object that contains parameter value extracted from URL 
    //console.log(username);
    res.render("instagram.ejs", { username,followers });
});

// for rolldice or getting data from backend
app.get("/rolldice", (req, res) => {
    // res.send("Hello");
    // res.render("rolldice.ejs");
    let diceVal = Math.floor(Math.random() *6) + 1;// getting data from backend
    res.render("rolldice.ejs", { diceVal }); // we can also pass only diceVal then also code will run
});

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});