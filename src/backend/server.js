const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const FormModel = require('./Mymodel');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend URL
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/form');
}

// POST route for handling form submission
app.post("/FormModel", async (req, res) => {
  try {
    // Assuming you want to create a new document using the submitted data
    const newData = await FormModel.create(req.body);
    res.send("Data submitted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
// DELETE route for deleting data
app.post("/deleltedata", async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    // Assuming each document in your FormModel collection has a unique _id field
    const deletedData = await FormModel.deleteOne({ _id: id });
    if (deletedData.deletedCount === 1) {
      res.send("Data deleted successfully");
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/getdata", async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    // Assuming each document in your FormModel collection has a unique _id field
    const data = await FormModel.findById(id);
    if (data) {
      res.json(data); // Assuming you want to send the retrieved data as JSON
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/updateDAta", async (req, res) => {
 
    try {
     
      const newData = req.body; // Assuming the new data is sent in the request body
  
      // Update the document with the provided id using findByIdAndUpdate
      // Set { new: true } to return the updated document
      const updatedData = await FormModel.findByIdAndUpdate(newData.id, newData, { new: true });
  
      if (updatedData) {
        res.json(updatedData); // Assuming you want to send the updated data as JSON
      } else {
        res.status(404).send("Data not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
});
// GET route for rendering a form
app.get('/Form', (req, res) => {
  // Send the Form.js file
  res.sendFile(path.join(__dirname, 'pages', 'Form.js'));
});

app.get("/fetchData", async (req, res) => {
  try {
    // Fetch data from the database
    const data = await FormModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/", (req, res) => {
  res.send("Root is working");
});


app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
