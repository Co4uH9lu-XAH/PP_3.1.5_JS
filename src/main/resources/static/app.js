const urlUsers = 'http://localhost:8080/api/users'
const insert = document.querySelector('#tableInsert')
let result = ''

//const deleteModal  = new bootstrap.Modal(document.getElementById('deleteModal'))
const editModal  = new bootstrap.Modal(document.getElementById('editModal'))
const editModalForm = document.querySelector('editModalForm')
const idEditModal = document.querySelector('idEditModal')
const usernameEditModal = document.querySelector('usernameEditModal')
const surnameEditModal = document.querySelector('surnameEditModal')
const ageEditModal = document.querySelector('ageEditModal')
const emailEditModal = document.querySelector('emailEditModal')
const roleEditModal = document.querySelector('roleEditModal')


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
                    <td class="text-center"><a class="btnEdit btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Edit</a></td>
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
    console.log(idForm)
    console.log(usernameForm)
    console.log(surnameForm)
    console.log(ageForm)
    console.log(emailForm)
    console.log(roleForm)
    console.log("YдОляй!!!")
})

// Обработчик событий кнопки редактировать
catchButtons(document, 'click', '.btnEdit', e => {
    const dataString = e.target.parentNode.parentNode

    // ЗАхватываем поля юзера
    const idForm = dataString.firstElementChild.innerHTML
    const usernameForm = dataString.children[1].innerHTML
    const surnameForm = dataString.children[2].innerHTML
    const ageForm = dataString.children[3].innerHTML
    const emailForm = dataString.children[4].innerHTML
    const roleForm = dataString.children[5].innerHTML
    console.log(idForm)
    console.log(usernameForm)
    console.log(surnameForm)
    console.log(ageForm)
    console.log(emailForm)
    console.log(roleForm)
    console.log("Не удОляй!!!")
})