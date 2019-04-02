const db  = require('./index.js');
const Listing = require('./Listing.js');
const faker = require('faker');
const mongoose = require('mongoose');

const sampleListings = () => {
  const listings = [];
  
  for (let i = 1; i <= 100; i++) {
    //listing data
    // let id = i;
    // let elevation = faker.random.number({min: 1000, max: 3000});
    // let weather = faker.random.number({min: 50, max: 95});
    // let distance = faker.random.number({min: 1, max: 10});
    let images = [];
  
    for (let j = 1; j <= 30; j++) {

      //image data
      // let imageId = j;
      // let userID = faker.random.number({min: 1, max: 100});
      // let imageURL = faker.image.imageUrl();
      // let datePosted = faker.date.past();
      // let location = faker.random.words(4);
  
      //images file
      images.push({
        // '_id' : j,
        'userId' : faker.random.number({min: 1, max: 100}),
        'imageURL' : faker.image.imageUrl(),
        'datePosted' : faker.date.past(),
        'location' : faker.random.words(4),
        'helpfulVotes' : faker.random.number({min: 1, max: 20})
      });
    };
    
    //listing file
    listings.push({
      '_id' : i,
      'elevation' : faker.random.number({min: 1000, max: 3000}),
      'weather' : faker.random.number({min: 50, max: 95}),
      'distance' : faker.random.number({min: 1, max: 10}),
      'images' : images,
    });
  }
  console.log(listings);
  return listings;
}


const insertSampleListings = () => {
  Listing.create(sampleListings())
    .then(() => mongoose.connection.close());
};

insertSampleListings();