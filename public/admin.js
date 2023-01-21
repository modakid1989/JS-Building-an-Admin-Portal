
// Your Code Here
//get all your books
async function main() {
   const response = await fetch('http://localhost:3001/listBooks') 
   const book = await response.json()

   book.forEach(renderBook)
}

//book title, input, button
function renderBook(book) {
    console.log(book)
    const root = document.getElementById('root')

    const li = document.createElement('li')
    li.textContent = book.title

    const input =document.createElement('input')
    input.value = book.quantity

    const saveButton = document.createElement('button')
    saveButton.textContent = 'save'
}

//add event listener to save button to make request to update book
     saveButton.addEventListener('click', () => {
     const body = {
     id: book.id,
     quantity: input.value
    }

 //fetch request  
  fetch('http://localhost:3001/updateBook', {
  method: 'PATCH',
  headers: {
  'content-type' : 'application/json'
  },
  body: JSON.stringify(body)
  })
  })
  
  li.append(input, saveButton)

  li.append(input)

  root.appendChild(li)

  main()
