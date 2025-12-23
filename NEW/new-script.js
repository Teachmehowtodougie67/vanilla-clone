import {postTodo} from "../shared/todo-service.js"



function saveTodo(event) {
    event.preventDefault();
    console.log(event);
    //const form = event.target;
    const form = document.getElementById('todo-form');
    const data = new FormData(form);

    console.log('Saving todo item:', data);

    const newTodo = {
        title: data.get('title'),
        description: data.get('description'),
        endDate: data.get('end-date'),
        color: data.get('color'),
        done: false,
        creationDate: new Date().toISOString()
    };

    postTodo(newTodo)
    .then(createdTodo => {
        console.log('Created todo:', createdTodo);
        form.reset();
        window.location.assign('../');
    })
}

document.getElementById("todo-form")
.addEventListener('submit',saveTodo) 