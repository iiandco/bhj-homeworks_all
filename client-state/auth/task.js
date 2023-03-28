const API_URL = 'https://students.netoservices.ru/nestjs-backend/auth';
const signArea = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const login = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const btn = document.querySelector('#signin__btn');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const local = JSON.parse(localStorage.getItem('userId')) || [];


const pageReload = () => {
  if (localStorage.getItem('userId')) {
    signArea.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.innerHTML = localStorage.getItem('userId');
  } else {
    signArea.classList.add('signin_active');
  }
};


const processRequest = (data) => {
  if (data.success) {
    signArea.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.innerHTML = data.user_id;
    localStorage.setItem('userId', data.user_id);
  } else {
    alert('Неверный логин/пароль');
  }
  form.reset();
};


btn.addEventListener('click', (e) => {
  e.preventDefault();

  const dataObj = {
    login: login.value,
    password: password.value
  };

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(dataObj),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => processRequest(data))
  .catch((err) => console.log('Fetch error: ', err));
});


document.addEventListener("DOMContentLoaded", pageReload);