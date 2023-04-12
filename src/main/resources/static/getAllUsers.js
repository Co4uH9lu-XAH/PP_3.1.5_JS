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
                <td>
                    <div class="all-classes-container">
                    <button id="changeButton" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                    data-bs-target="#changeModal" onclick="drawChangeModal(${user.id})">
                    Edit
                    </button>
                    </div>
                </td>
                <td>
                    <div class="all-classes-container">
                    <button id="deleteButton" type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                    data-bs-target="#deleteModal" onclick="drawDeleteModal(${user.id})">
                    Delete
                    </button>
                    </div>
                </td>
            </tr>
        `
    });
    table.innerHTML = result
}

fetch(urlUsers)
    .then(response => response.json())
    .then(data => showUsers(data))
    .catch(error => console.log(error))








