const express = require("express");
const app = express();
const port = 5000;

//import library CORS
const cors = require("cors");

//use cors
app.use(cors());

//import body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//import route posts
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter); // use route posts di Express

app.listen(process.env.PORT || 5000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
/*
app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});

*/
