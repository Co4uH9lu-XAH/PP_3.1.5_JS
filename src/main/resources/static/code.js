const urlUsers = 'http://localhost:8080/api/users'
const urlUser = 'http://localhost:8080/api/user'
const table = document.querySelector('tbody')


// UsersTable

const showUsers = (users) => {
    let result = '';
    users.forEach(user => {
        result +=`
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.surname}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.roles[0].name.replace("ROLE_", "")}</td>
                <td class = "text-center"><a class = "editBtn btn btn-primary">Edit</a></td>
                <td class = "text-center"><a class = "deleteBtn btn btn-danger">Delete</a></td>
            </tr>
        `
    });
    table.innerHTML = result
}

fetch(urlUsers)
    .then(response => response.json())
    .then(data => showUsers(data))
    .catch(error => console.log(error))

//Delete modal
table.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteBtn")) {
        console.log("Кнопка Delete была нажата");
    }
});






