const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

let listingSchema = mongoose.Schema({
  'id' : Number,
  'elevation' : Number,
  'weather' : Number,
  'distance' : Number,
  'images' : [{
    'id' : Number,
    'userId' : Number,
    'imageURL' : String,
    'datePosted' : String,
    'location' : String,
  }],
  'helpfulVotes' : Number
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;