// Use of express js to perform get,post,put and delete data in the database Mongodb.

const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json());
const mongodb = require('mongodb')

app.get('/',async (req,res)=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    res.send(data);
});
app.post('/add',async (req,res)=>{
    let data = await dbConnect();
    const status = await data.insertOne({
        p_name:req.body.name,
        price:req.body.price>200?req.body.price+1:req.body.price
    });
    console.log(status);
    res.send("Added");
});
app.put('/update',async (req,res)=>{
    let db = await dbConnect();
    const existingItem = await db.findOne({p_name:req.body.p_name});
    if(!existingItem){
        res.send("You dont't have such item in you cart")
    }else{
    const status = await db.updateOne(
        { p_name: req.body.p_name},
        {$set:{price:'0'}
       }
    );
    console.log(status);
    if(status.acknowledged);
    res.send("Updated");
  }
});

app.delete('/:id',async(req,res)=>{
    let db = await dbConnect();
    const status = await db.deleteOne({
        _id:new mongodb.ObjectId(req.params.id)
    })
    res.send("deleted")
})

app.listen(3000);
