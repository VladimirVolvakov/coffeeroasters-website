let openBtn1 = document.querySelector('#open-options-1');
let openBtn2 = document.querySelector('#open-options-2');
let openBtn3 = document.querySelector('#open-options-3');
let openBtn4 = document.querySelector('#open-options-4');
let openBtn5 = document.querySelector('#open-options-5');
let optionsSet1 = document.querySelector('#options-set-1');
let optionsSet2 = document.querySelector('#options-set-2');
let optionsSet3 = document.querySelector('#options-set-3');
let optionsSet4 = document.querySelector('#options-set-4');
let optionsSet5 = document.querySelector('#options-set-5');

openBtn1.addEventListener('click', () => {
  openBtn1.classList.toggle('create-plan__btn-opened-options');
  optionsSet1.classList.toggle('create-plan__options-open');
});

openBtn2.addEventListener('click', () => {
  openBtn2.classList.toggle('create-plan__btn-opened-options');
  optionsSet2.classList.toggle('create-plan__options-open');
});

openBtn3.addEventListener('click', () => {
  openBtn3.classList.toggle('create-plan__btn-opened-options');
  optionsSet3.classList.toggle('create-plan__options-open');
});

openBtn4.addEventListener('click', () => {
  openBtn4.classList.toggle('create-plan__btn-opened-options');
  optionsSet4.classList.toggle('create-plan__options-open');
});

openBtn5.addEventListener('click', () => {
  openBtn5.classList.toggle('create-plan__btn-opened-options');
  optionsSet5.classList.toggle('create-plan__options-open');
});