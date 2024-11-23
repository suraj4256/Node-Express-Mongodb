const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(){
  let result = await client.connect();
  let db = result.db('e-com'); 
 return collection = db.collection('products');
} 

// Exporting the promise instead of the function
module.exports = dbConnect;