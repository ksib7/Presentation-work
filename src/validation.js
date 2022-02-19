let btnEl = document.getElementById('btn');
let emailEl = document.getElementById('email');
let textEl = document.getElementById('text')
let formEl = document.getElementById('form');

let btn = document.querySelector('.btn--js');
let email = document.querySelector('.email--js');
let form = document.querySelector('.form--js');

// for footer
formEl.addEventListener('submit', function (event) {
    if (emailEl.value == '' || textEl.value == '') {
        alert('Заполните поле ввода.');
        event.preventDefault();
    }
});

// for registration form
form.addEventListener('submit', function (event) {
    if (email.value == '' || textEl.value == '') {
        alert('Заполните поле ввода.');
        event.preventDefault();
    }
});