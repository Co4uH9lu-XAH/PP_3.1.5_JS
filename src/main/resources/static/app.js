const urlUsers = 'http://localhost:8080/api/users'
const insert = document.querySelector('#tableInsert')
let result = ''

const deleteModal  = new bootstrap.Modal(document.getElementById('deleteModal'))



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
                    <td class = "text-center"><a class = "btnEdit btn btn-primary">Edit</a></td>
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
    const id = dataString.firstElementChild.innerHTML
    console.log(id)
})

// Обработчик событий кнопки редактировать
catchButtons(document, 'click', '.btnEdit', e => {
    console.log("Не удОляй!!!")
})