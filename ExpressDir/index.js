const express = require("express");
// express is actually a function which we will execute
const app = express();
// by convention we give the name app and it helps us to create server side app.
// app is acutally an object

// console.dir(app); 

let port =3000; //8080 both cusutom port

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("Request Received");
//     //res.send("This is a basic response"); // res = string
//     res.send ({ // res = object
//         fruit: "apple",
//         color: "red"
//     });
// });

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

// app.get("/search", (req, res) => {
//     res.send("you contacted search path");
// });

// app.get("/help", (req, res) => {
//     res.send("you contacted help path");
// });

// app.get("*", (req, res) => { // custom response
//     res.send("this path does not exit");
// });

// app.post("/", (req, res) => {
//     res.send("you send a post request");
// });

// app.get("/:username/:id", (req, res) => {
//     console.log(req.params); // it shows req paramaters
//     res.send("you contacted root path");
// });

// app.get("/:username/:id", (req, res) => {
//     let { username, id} = req.params;
//     let htmlStr = `<h1> Welcome to the page of ${username}<h1>`;
//     res.send(htmlStr);
// });

app.get("/search", (req, res) => {
    console.log(req.query); 
    res.send("no results");
});