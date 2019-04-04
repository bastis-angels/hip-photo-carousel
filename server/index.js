const express = require('express');
let app = express();
const port = 3000;

const bodyParser = require('body-parser');
const Listings = require('../server/database/Listing.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


//gets all listings
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

//Finds a particular listing image and updates the helpful vote count by 1
app.patch('/listing/:listingID/:imageID', (req, res) => {
  Listings.findById(req.params.listingID, (err, listing) => {
    if (err) {
      res.status(404).send(err);
    } else {
      for (let i = 0; i < listing.images.length; i++) {
        if (listing.images[i].id = req.params.imageID) {
          listing.images[i].helpfulVotes += 1;
          res.status(206).send(listing.images[i]);
          break;
        }   
      }
    }
})
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
