const mongoose = require('mongoose');

mongoose.connect(mongodb+srv://gulshan63072:Uh6SwMQA2oxswTj2@kirat.i9fgd.mongodb.net/todos);

const todoSchema = mongoose.Schema({
    title: String,
    description:String,
  completed: Boolean,
});


const todo =mongoose.model('todo',todoSchema);

module.exports={
    todo:todo
}