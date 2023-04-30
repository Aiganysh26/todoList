const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

// метод trim удаляет пробелы в строке
const createTodo = () => {
  if(!input.value.trim()){
    input.value = ''
    return false
  } else {
    // создаем элементы, верстаем
    const div = document.createElement('div')
    const text = document.createElement('h3')
    const divButton = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    // создаем атрибуты Н:(class='block_text')
    div.setAttribute('class', 'block_text')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')
    divButton.setAttribute('class', 'div_button')

    // стилизация верстки
    
    // создаем текст внутри кнопок и input
    deleteButton.innerHTML = 'delete'
    editButton.innerHTML = 'edit'
    text.innerHTML = input.value 
    input.value = ''

    // добавляем элементы в html
    // когда мы используем prepend, каждое новое сообщение которое  мы добавим будет появлятся сверзху 
    divButton.append(deleteButton, editButton)
    div.append(text, divButton)
    todoList.prepend(div)

    // логика для кнопки editButton, редактируем
    editButton.addEventListener('click', () => {
      const newText = prompt('edit ' + text.innerHTML).trim()
      newText === '' ? text.innerHTML : text.innerHTML = newText
    })

    // логика для кнопки deleteButton, удаляем
    deleteButton.addEventListener('click', () => {
      div.remove()
    })
  }
}

createButton.onclick = () => createTodo()