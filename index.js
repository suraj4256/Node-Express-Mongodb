// // Connection to Mongodb..
// // ->
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// async function dbConnect(){
//   let result = await client.connect();
//   let db = result.db('e-com'); 
//  return collection = db.collection('products');
// //   let response = await collection.find({}).toArray();
//   console.log(response);
// } 

//  getData().then((data)=>{
//      data.find({}).toArray().then((item)=>{
//         console.log(item)
//      })
//  })
// ->
// End-----


// Here I have called the before I exported it an dthen I have stored that in a variable, the promise
// after that I have exported the result promise.
// Here that promise stored is processed to be shown the console(global module)
const dbConnect = require('./mongodb');
dbConnect().then((data) => {
    data.find({}).toArray().then((items) => {
        console.log(items);
    }).catch((err) => {
        console.error("Error in toArray:", err);
    });
}).catch((err) => {
    console.error("Error connecting to the database:", err);
});