const express = require("express");
const app = express();
const path =  require("path"); // requiring path for ejs (for running server outside the directory)

const port= 8080; // for our local server


// requiring uuid for creating unique id for post
const { v4: uuidv4 } = require('uuid');

//requiring method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


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
        id : uuidv4(),
    },

    {
        username : "Ravi",
        content: "workaholic",
        id : uuidv4(),
    },

    {
        username : "Tuls",
        content: "Loves shopping",
        id : uuidv4(),
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
    let id = uuidv4();
    posts.push({id, username, content});
    //res.send("post request working");
    res.redirect("/posts") //redirect to quora page (by default it will redirect to get)

});

app.get("/posts/:id", (req, res) => { // to get only one post
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    //console.log(post);
    //res.send("request working");
    res.render("show.ejs", { post });
});


app.patch("/posts/:id", (req, res) => { 
    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find((p) => id === p.id);
    post.content = newContent; // resetting to newContent
    console.log(post);
    // console.log(newContent);
    res.send("patch request working");
    res.redirect("/posts");
});


//for edit
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});

});

app.delete("/posts/:id", (req, res) =>{
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})


app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});