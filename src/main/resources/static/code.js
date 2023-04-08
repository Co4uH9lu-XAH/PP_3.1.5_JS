const urlUsers = 'http://localhost:8080/api/users'
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
                <td><button class="btn btn-primary" data-bs-toogle="modal"
                    data-bs-target="#editModal"
                    onclick="editModalData(${user.id})">Edit</button></td>
                <td><button class="btn btn-danger" data-bs-toogle="modal"
                    data-bs-target="#deleteModal"
                    onclick="deleteModalData(${user.id})">Delete</button></td>
                
            </tr>
            `
    });
    table.innerHTML = result
}

fetch(urlUsers)
    .then(response => response.json())
    .then(data => showUsers(data))
    .catch(error => console.log(error))

