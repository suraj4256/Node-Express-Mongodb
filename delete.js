const dbConnect = require('./mongodb');

const deleteData=async()=>{
    const db = await dbConnect();
    const result =await db.deleteOne(
        {
            p_name:'Honey'
        }
    )
    console.log(result);
}

deleteData();
