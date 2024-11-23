const dbConnect = require('./mongodb');

const updateData = async() =>{
      let db = await dbConnect();
      const existingItem =  await db.findOne({ p_name: "Surf-excel" });
      console.log(existingItem);  
      if(existingItem){
      let result =await db.updateMany(
       { p_name: "Surf-excel"},
        {$set:{price:'0'}
       }
      )
      console.log(result);
    }
}

updateData();