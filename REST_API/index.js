const express = require("express");
const app = express();
const path =  require("path"); // requiring path for ejs (for running server outside the directory)

const port= 8080; // for our local server


// serving static files

// only runs under ejsdir
app.use(express.static("public")); // by default all static files takes express from public folder

// //can run from anywhere
// app.use(express.static(path.join(__dirname, "public/css")));
// app.use(express.static(path.join(__dirname, "public/js")));



app.set("view engine", "ejs"); // express internally require ejs
app.set("views", path.join(__dirname, "/views")); // for running server outside the directory

app.use(express.urlencoded({ extended: true }));


// creating array for storing post details

let posts = [ // haven't used const becz it will create issue if we delete it
    {
        username : "Moon Sahu",
        content: "Learnig WEB DEVELOPMENT",
        id : "1a",
    },

    {
        username : "Ravi",
        content: "workaholic",
        id : "2b",
    },

    {
        username : "Tuls",
        content: "Loves shopping",
        id : "3c",
    },
];

app.get("/posts", (req, res) => { // index route
    //res.send("Serving Working well!");
    res.render("index.ejs", { posts });

});

app.get("/posts/new", (req, res) => { // create route post (serve the form)
    res.render("new.ejs");

});

app.post("/posts", (req, res) => { // create route post (add the new post)
    let {username, content} = req.body;
    posts.push({username, content});
    //res.send("post request working");
    res.redirect("/posts") //redirect to quora page (by default it will redirect to get)

});

app.get("/posts/:id", (req, res) => { // to get only one post
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.send("request working");
});


app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});