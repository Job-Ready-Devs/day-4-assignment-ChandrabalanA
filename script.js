const form = document.querySelector('#add-student form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentList = document.querySelector('#student-list ul');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    
    // Validate inputs
    if (!name || !email) {
        alert('Please fill out both fields!');
        return;
    }
    
    // Add the student to the list
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${email}`;
    studentList.appendChild(listItem);
    
    // Clear the inputs
    nameInput.value = '';
    emailInput.value = '';
    });