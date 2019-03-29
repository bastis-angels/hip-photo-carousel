const db  = require('./index.js');
const Listing = require('./Listing.js');
const faker = require('faker');

const sampleListings = () => {
  const listings = [];
  
  for (let i = 1; i <= 100; i++) {
    //listing data
    let id = i;
    let elevation = faker.random.number({min: 1000, max: 3000});
    let weather = faker.random.number({min: 50, max: 95});
    let distance = faker.random.number({min: 1, max: 10});
    let helpfulVotes = faker.random.number({min: 1, max: 20});
    let images = [];
  
    for (let j = 1; j <= 30; j++) {

      //image data
      let imageId = j;
      let userID = faker.random.number({min: 1, max: 100});
      let imageURL = faker.image.imageUrl();
      let datePosted = faker.date.past();
      let location = faker.random.words(4);
  
      //images file
      images.push({
        'id' : imageId,
        'userId' : userID,
        'imageURL' : imageURL,
        'datePosted' : datePosted,
        'location' : location
      });
    };
    
    //listing file
    listings.push({
      'id' : id,
      'elevation' : elevation,
      'weather' : weather,
      'distance' : distance,
      'images' : images,
      'helpfulVotes' : helpfulVotes
    });
  }
  return listings;
}


const insertSampleListings = () => {
  Listing.create(sampleListings)
    .then(() => db.disconnect());
};

insertSampleListings();