const express = require('express');
let app = express();
const port = 3000;

const bodyParser = require('body-parser');
const Listings = require('../database/Listing.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/listing/:listingID', (req, res) => {
  //TODO - get the camp listing your searching for
  Listings.findOne()
});

app.patch('/listing/:listingID/:photoID', (req, res) => {
  //TODO - get the right listing image and increment the helpful vote by 1
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
