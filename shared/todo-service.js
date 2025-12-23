const baseUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos";



 export function getAllTodos() {
    const apiUrl = baseUrl

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}

 export function getTodo(id) {
    const apiUrl = baseUrl + "/" +  id;

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}

 export function deleteTodo(id) {

    const apiUrl = baseUrl + "/" +  id;

    return fetch(apiUrl, {method: 'DELETE'})
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error))
}

 export function changeDoneStatus(id, newStatus) {

        const apiUrl = baseUrl + "/" +  id;


    return fetch(apiUrl, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ done: newStatus })
    }).then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error))
}

 export function postTodo(todo) {

    const apiUrl = baseUrl

    return fetch(apiUrl, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(todo)
    }).then(res => res.json())
    .then(result => result)
    .catch(error => console.error('Error:', error));
}   