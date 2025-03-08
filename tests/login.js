const name = document.getElementById('name')
const password = document. getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// prevents the page from submitting (going to the next page)
form.addEventListener('submit', (e) =>{
    let messages = [] // checks for any error messages
    if (name.value === '' || name.value == null) { // checks if there is nothing inputted into name
        messages.push("Name is required")
    }

    if (password.value.length <= 6) { // checks if password is longer than 6 characters
        messages.push('Password must be longer')
    }

    if (password.value.length >= 20) { // checks if password is less than 20 characters
        messages.push('Password must be longer')
    }

    if (password.value === 'password') {
        messages.push('Password cannot be password')
    }

    if (messages.length > 0) { // to check if there is an actual form of error in the name or password
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})