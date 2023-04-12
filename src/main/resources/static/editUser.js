let toModalEdit = document.getElementById('editInsert');
console.log(toModalEdit)
function drawChangeModal(id) {

    console.log('Кнопка ИЗМЕНИТЬ пользователя №' + id + ' нажата!');
    let url = 'http://localhost:8080/api/user/' + id;
    let body = ''
    fetch(url)
        .then(response => response.json())
        .then(data => changingData(data))
        .catch(error => console.log(error))
    const changingData = (data) => {
        console.log(data)
    }
}

function changeUserAction() {
    let id = document.getElementById('id').value;
    // получаем массив int из формы select по id="roles" и name="roles4change"
    let roles = $('#roles').val();
    class Role {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    let currentRoles = [];
    for(let i = 0; i<roles.length; i++) {
        const id = roles[i];
        const authority = id == 1 ? `ROLE_ADMIN` : `ROLE_USER`
        currentRoles.push(new Role(id, name))
    }
    const user = {
        id: document.getElementById('id').value,
        username: document.getElementById('username').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        roles: currentRoles
    };
    fetch('http://localhost:8080/api/users/',{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            console.log('ПОЛЬЗОВАТЕЛЬ №' + id + 'ИЗМЕНЕН')
            let bodyRolesString = '';
            for (let a = 0; a < data.roles.length; a++) {
                bodyRolesString += data.roles[a].name.substring(5);
                bodyRolesString += a<(data.roles.length-1) ? ", " : "";
            }
            toModalEdit.innerHTML = `
                <td id="id:${data.id}">${data.id}</td>
                <td id="username:${data.id}">${data.username}</td>
                <td id="surname:${data.id}">${data.surname}</td>
                <td id="age:${data.id}">${data.age}</td>
                <td id="email:${data.id}">${data.email}</td>
                <td id="roles:${data.id}">${bodyRolesString}</td>
                <td>
                    <div class="all-classes-container">
                    <button id="changeButton" type="button" class="btn btn-primary btn-sm" data-toggle="modal"
                            data-target="#changeModal" data-userID="${data.id}">
                        Изменить
                    </button>
                </div>
                </td>
                <td>
                    <button id="deleteButton" type="button" class="btn btn-danger btn-sm" data-toggle="modal"
                            data-target="#deleteModal" data-userID="${data.id}">
                        Удалить
                    </button>
                </td>`
        })
        .catch(error => {
            console.log("ОШИБКА, ИЗМЕНЕНИЯ ДАННЫХ ПОЛЬЗОВАТЕЛЯ №" + id + " " + error.message);
        });
}