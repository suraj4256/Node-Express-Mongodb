// Here we will be inserting data with in our database.
const dbConnect = require("./mongodb");

const insertData = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      P_name: "Vivo v1",
      price: "5000",
    },
    {
      P_name: "PC-5",
      price: "8000",
    },
  ]);
  console.log(result.acknowledged);
};

insertData();
