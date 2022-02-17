"use strict";

let btnEl = document.getElementById('btn');
let emailEl = document.getElementById('email');
let textEl = document.getElementById('text');
let formEl = document.getElementById('form');
formEl.addEventListener('submit', function (event) {
  if (emailEl.value == '' || textEl.value == '') {
    alert('Заполните поле ввода.');
    event.preventDefault();
  }
});