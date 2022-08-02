const contactButton = document.querySelector ('.contact-button');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal_close');
const modalForm = modal.querySelector('.modal-form');
const formName = modal.querySelector('.fieldset-input-text');
const formEmail = modal.querySelector('.fieldset-input-email');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

contactButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  if (storage) {
    formName.value = storage;
    formEmail.focus();
  } else {
  formName.focus();
  }
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});

modalForm.addEventListener('submit', function(evt) {
  if (!formName.value || !formEmail.value) {
  evt.preventDefault();
  modal.classList.remove('modal-error');
  modal.offsetWidth = modal.offsetWidth;
  modal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('login', formName.value);
    }
  }
});




