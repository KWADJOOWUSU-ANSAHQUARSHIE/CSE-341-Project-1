const express = require('express');
const mongo = require('./data/database'); // Assuming correct path to MongoDB database file
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes')); // Corrected path to routes file

// Ensure MongoDB connection is established before starting the server
mongo.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Running on port ${port}`); // Using template literal for proper variable interpolation
    });
  }
});
