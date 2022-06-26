const { loadingController } = require("@ionic/core");

const todos = [
    {
        id:1,
        text: 'buy groceries',
        isCompleted: true
    },
    {
        id:2,
        text: 'work appt',
        isCompleted: false
    },
    {
        id:3,
        text: 'pick up wife',
        isCompleted: true
    }
];

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text, todos[1].isCompleted);
}

for(let todos of todos){
    console.log(todos);
}

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});


const todoId = todos.map(function(todo){
    return todo.id;
});
console.log(todoId);


const todoIsCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoIsCompleted);

//Kombination
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === false;
}).map(function() {
    return todo.text;
});
console.log(todoCompleted);