function displayTodos(todos){

    const todosContainer = document.getElementById('todos-container');
    todosContainer.innerHTML = "";

    for (const todo of todos) {
        
        const card = document.createElement('div');
        card.classList.add('todo-card');

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(todo.title));
        // titleSpan.style.textDecoration = 'line-through'

        card.appendChild(titleSpan);

        // const detailBtn = document.createElement('button');
        // detailBtn.appendChild(document.createTextNode("🠊"));
        // detailBtn.classList.add("detail-btn");
        // detailBtn.addEventListener('click', () => {
        //     window.location.assign('./detail.html?todoId=' + todo.id)
        // })

        // card.appendChild(detailBtn);

        const detailLink = document.createElement('a');
        detailLink.appendChild(document.createTextNode("🠊"));
        detailLink.classList.add("detail-link");
        detailLink.href = './detail.html?todoId=' + todo.id;

        card.appendChild(detailLink);

        todosContainer.appendChild(card);

    }

}

let todos = []

getAllTodos().then(results => {
    todos = results;
    displayTodos(todos)
})


function orderByTitle() {
    todos.sort((t1, t2) => t1.title.localeCompare(t2.title));
    displayTodos(todos);
}

function compareDates(t1, t2) {
    const date1 = t1.creationDate;
    const date2 = t2.creationDate;
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
    const time1 = dateObj1.getTime();
    const time2 = dateObj2.getTime();
    return time2 - time1; 
}

function orderByCreationDate(){
    todos.sort(compareDates);
    displayTodos(todos);
}


// due tasti nella home (lista di todo)
// 1) mette in ordine alfabetico
// 2) mette in ordine dal più nuovo al più vecchio in base alla creationDate