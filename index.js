

const express = require('express');
const {createTodo } = require('./types');
const app = express();

app.use(express.json());


app.post('/todo',async function(req,res){
const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if(!parsedPayload.success){
    return res.status(411).json({
        msg:"You sent wrong inputs "
    })
    return; 
}
//put things in mongodb

await todo.create({
    title:parsedPayload.title,
    description:parsedPayload.description,
    completed:false
})
res.json({
    msg:" todo created"
})

});
app.get('/todos',async(req,res)=>{
const todos = await todo.find({});
res.json({
    todos
})

});


app.put('/completed',async function(req,res){

const updatePayload = req.body;
const parsedPayload = createTodo.safeParse(updatePayload);

if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent wrong inputs"
    })
    return;
}
await todo.update({
    _id:req.body.id
},{completed:true

})
res.json({
    msg:"todo marked as completed"
})
});


app.listen(3000,()=>{
    console.log('server is listening on port 3000')
});