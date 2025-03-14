

const express = require('express');
const app = express();

app.use(express.json());

app.get('/todos',(req,res)=>{
    res.send('hi hello only')
});

app.post('/todo',(req,res)=>{
    console.log(req.body);
    res.send('hi hello only')
});
app.put('/complete',function(req,res){
    res.send('hi hello only')
});
app.delete('/',function(req,res){
    res.send('hi hello only')
});

app.listen(3000,()=>{
    console.log('server is listening on port 3000')
});