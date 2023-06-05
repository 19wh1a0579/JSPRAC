// Local storage

const btn = document.querySelector('.btn');


// // Mouse Event
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });

//   btn.addEventListener('mouseover', e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = 'blue';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });

//   btn.addEventListener('mouseout', e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = 'yellow';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });
  
  

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput,value}: ${emailInput.value}`));

    var textname = `${nameInput.value}`
    var textemail = `${emailInput.value}`
    localStorage.setItem("name",textname);
    localStorage.setItem("email",textemail);
    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

