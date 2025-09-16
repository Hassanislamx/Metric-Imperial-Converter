'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api.js');

const app = express();

app.use(cors({ optionSuccessStatus: 200 }));  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Routes
apiRoutes(app);

// 404 handler
app.use(function (req, res, next) {
  res.status(404).send('Not Found');
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port " + port);
});

module.exports = app; // Export for testing
