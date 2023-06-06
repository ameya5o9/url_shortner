const express = require("express")

const PORT = 1337

const app = express();

const mongoose = require('mongoose');

// const router = require("./routes/router")

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection was successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

app.use(express.urlencoded({express:true}));

app.use(express.static("public"));

app.use(express.json());

app.use("/api", (req, res) => {
    console.log("hii");
    res.send("Received");
  });

app.listen(PORT, ()=>{
    console.log("Success PORT", PORT)
});