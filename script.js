'use strict';

// let showModel = document.querySelector('.show-modal');
let closeModal = document.querySelector('.close-modal');
// let hide = document.querySelector('.hidden');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].addEventListener('click', openModal));
}

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
