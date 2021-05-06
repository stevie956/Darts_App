const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const matchRouter = require("./routes/matchRoutes");
const userRouter = require("./routes/userRoutes")
const bodyParser = require('body-parser');

//mongoDb connection
mongoose.connect("mongodb://localhost:27017/gameOn!", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Initialise app object
const app = express();

// app port
const port = 4000;

app.use(cors());

//read json
app.use(express.json());

app.use(session({
    secret: 'stevieseiflex',
    resave: false,
    saveUninitialized: false
}));

app.use("/api/match", matchRouter);

app.use("/api/user", userRouter);

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`Darts Port is listening at http://localhost:${port}`)
});