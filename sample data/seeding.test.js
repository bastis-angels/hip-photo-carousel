// const sum = require('./seeding-data');

// //will initialize our set of data before running each test
// beforeEach(() => {
//   initializeListingDatabase();
// });

// //will clear out the database after running each test
// afterEach(() => {
//   clearListingDatabase();
// });

// //// Example Test ////
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// //// example mock function ////
// const mockCallback = jest.fn(x => 42 + x);
// forEach([0, 1], mockCallback);

// // The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(2);

// // The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0);

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1);

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42);

//////////////////////////////////////////////////////////////

//Some things we might want to test
//expect type of to be an array
//expect length of seeding array to equal 100
//expect all objects to have the following properties
  //ID
  //elevation
  //weather
  //distance
  //images
//expect the images property to contain an array of objects
  // expect each image to have a url property
  // expect each image to have a userID property  

//example function
// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;


// //example function

// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }