const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal_active');
  document.cookie = 'modalClose=true';
});

if (!document.cookie.match(/true/g)) {
  modal.classList.add('modal_active');
} else {
  modal.classList.remove('modal_active');
}