const express = require('express');
const cors = require('cors');
const New = require('./algorithm');
const app = express();
app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    const snapshot = await New.get();
    const list = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
    res.send(list);
 });
app.post("/create",async(req,res)=>{
    const data = req.body;
    console.log("Data of Users", data);
    await New.add(data);
    res.send({msg: "User Added"});
});
app.post("/update",async(req,res)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    await New.doc(id).update(data);
    res.send({msg: "Updated"});
});

app.post("/delete",async(req,res)=>{
    const id = req.body.id;
    await New.doc(id).delete();
    res.send({msg: "Deleted"});
});

app.listen(8000,()=>console.log("Up & Running on *8000"));