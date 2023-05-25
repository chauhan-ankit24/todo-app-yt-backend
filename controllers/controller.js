import TodoModel from '../models/model.js'

export const getTodo = async (req, res) => {
    const todo = await TodoModel.find();
    res.send(todo);
}
export const saveTodo = async (req, res) => {

    const { text } = req.body;
    TodoModel
        .create({ text })
        .then((data) => {
            console.log('Added Successfully...');
            console.log(data);
            res.send(data);
        })
}
export const updateTodo = async (req, res) => {

    const { _id, text } = req.body;
    TodoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Updated Successfully..."))
        .catch((err) => console.log(err));
}
export const deleteTodo = async (req, res) => {

    const { _id, } = req.body;
    TodoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}
