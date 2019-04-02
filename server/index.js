const express = require('express');
let app = express();
const port = 3000;

const bodyParser = require('body-parser');
const Listings = require('../database/Listing.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


//get all listings
app.get('/listing/:listingID', (req, res) => {
  Listings.findById(req.params.listingID, (err, listing) => {
    if (err) {
      console.error('something went wrong with your get route', err);
    } else {
      console.log(res.status);
      res.status(200).send(listing);
    }
  })
});

app.patch('/listing/:listingID/:photoID', (req, res) => {
  Listings.findById(req.params.listingID.images.imageID, (err, image) => {
    //TODO - get the right listing image and increment the helpful vote by 1
    if (err) {
      console.error('something went wrong with your patch route', err);
    } else {
      console.log(res.status);
      image.helpfulVotes += 1;
      res.end(image);
    }
})
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
