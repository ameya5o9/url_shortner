const express = require("express")

const PORT = 5500

const app = express();

const bodyParser = require("body-parser")

const cors = require('cors');
app.use(cors());

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

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(express.json());

app.post("/submit", (req, res) => {

  let link = req.body.link;

  let data = {
      "link": link,
      
  }

  db.collection('users').insertOne(data,(err,collection)=>{
      if(err){
          throw err;
      }
      console.log("Record Inserted Successfully");
  });

  // return res.redirect('signup_success.html')

    console.log("lol");
    res.send("Received");
  });

app.listen(PORT, ()=>{
    console.log("Success PORT", PORT)
});

// Define a route to handle the POST request
// app.post('/submit', (req, res) => {
//     // Extract the data from the request body
//     const value = req.body.value;
  
//     // Create a new document using Mongoose and save it to the database
//     const newData = new DataModel({ value: value });
//     newData.save()
//       .then(savedData => {
//         // Return a response indicating success
//         res.json({ message: 'Data saved successfully!' });
//       })
//       .catch(error => {
//         // Handle any errors that occur during saving
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while saving the data.' });
//       });
//   })

