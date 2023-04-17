const urlUsers = 'http://localhost:8080/api/users'
const insert = document.querySelector('#tableInsert')

// Захват модального окна и кнопки buttonCreate
const modalElement = new bootstrap.Modal(document.getElementById('modalElement'))
let button = document.querySelector('#buttonCreate');

// Захват формы модального окна редактирования, оно же создание нового юзера
const form = document.getElementById('modalForm')

// Захват
const id = document.getElementById('id')
const username = document.getElementById('username')
const surname = document.getElementById('surname')
const age = document.getElementById('age')
const email = document.getElementById('email')
const role = document.getElementById('role')
let option = ''
let result = ''


button.addEventListener('click', function() {
    modalElement.show();
});



// Заполнение таблицы юзерами
fetch(urlUsers)
    .then(response => response.json())
    .then(data => showUsers(data))
    .catch(error => console.log(error))

const showUsers = (users) => {
    users.forEach(user => {
        result +=`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.surname}</td>
                    <td>${user.age}</td>
                    <td>${user.email}</td>
                    <td>${user.roles[0].name}</td>
                    <td class="text-center"><a class="btnEdit btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalElement">Edit</a></td>
                    <td class = "text-center"><a class = "btnDelete btn btn-danger">Delete</a></td>
                </tr>
        `
    insert.innerHTML = result
    })
}
// Далее большой раздел с модальными окнами

//Хватаю кнопки
const catchButtons = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)) {
            handler(e)
        }
    })
}
// Обработчик событий кнопки удалить
catchButtons(document, 'click', '.btnDelete', e => {

    // тут помещяем в переменню строку с данными юзера и далее в id выдергиваем айдишник
    const dataString = e.target.parentNode.parentNode

    // ЗАхватываем поля юзера
    const idForm = dataString.firstElementChild.innerHTML
    const usernameForm = dataString.children[1].innerHTML
    const surnameForm = dataString.children[2].innerHTML
    const ageForm = dataString.children[3].innerHTML
    const emailForm = dataString.children[4].innerHTML
    const roleForm = dataString.children[5].innerHTML
})

