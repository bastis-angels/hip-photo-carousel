const express = require('express');
let app = express();

const bodyParser = require('body-parser');
// const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/listing/:listingID', (req, res) => {
  //TODO
});

app.patch('/listing/:listingID/:photoID', (req, res) => {
  //TODO
})

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
