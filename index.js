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

let form = document.querySelector('.create-plan__form');
let submitBtn = document.querySelector('#submit-btn');

let coffeeForm = document.getElementsByName('coffee-form');
let coffeeType = document.getElementsByName('coffee-type');
let coffeeQuantity = document.getElementsByName('coffee-qty');
let coffeeGrindType = document.getElementsByName('coffee-grind');
let deliveryFrequency = document.getElementsByName('delivery-frequency');

let coffeeFormContent = document.querySelector('#summary-option-1');
let coffeeTypeContent = document.querySelector('#summary-option-2');
let coffeeQuantityContent = document.querySelector('#summary-option-3');
let coffeeGrindTypeContent = document.querySelector('#summary-option-4');
let deliveryFrequencyContent = document.querySelector('#summary-option-5');

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

function getFormFieldData (options) {
  let optionValue;

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      optionValue = options[i].value;
      break;
    }
  }

  return optionValue;
}

optionsSet1.addEventListener('change', () => {
  let coffeeFormValue = getFormFieldData(coffeeForm);
  coffeeFormContent.innerHTML = coffeeFormValue;
});

optionsSet2.addEventListener('change', () => {
  let coffeeTypeValue = getFormFieldData(coffeeType);
  coffeeTypeContent.innerHTML = coffeeTypeValue;
});

optionsSet3.addEventListener('change', () => {
  let coffeeQuantityValue = getFormFieldData(coffeeQuantity);
  coffeeQuantityContent.innerHTML = coffeeQuantityValue;
});

optionsSet4.addEventListener('change', () => {
  let coffeeGrindTypeValue = getFormFieldData(coffeeGrindType);
  coffeeGrindTypeContent.innerHTML = coffeeGrindTypeValue;
});

optionsSet5.addEventListener('change', () => {
  let deliveryFrequencyValue = getFormFieldData(deliveryFrequency);
  deliveryFrequencyContent.innerHTML = deliveryFrequencyValue;
});

function onFormSubmit (event) {
  event.preventDefault();
  console.log('Form is submitted');
}

form.addEventListener('submit', onFormSubmit);