
var form = document.querySelector('.search-form');
var formWrap = document.querySelector('.form-wrap');
var showFormButton = document.querySelector('.btn-search');
var dateIn = form.querySelector('[name=check-in]');
var dateOut = form.querySelector('[name=check-out]');
var grownups = form.querySelector('[name=grownups]');
var children = form.querySelector('[name=children]');



showFormButton.addEventListener('click', function (evt) {
 evt.preventDefault();
 form.classList.toggle('search-form-show');
 form.classList.remove('form-error');
 formWrap.classList.toggle('form-wrap-show');
});

form.addEventListener('submit', function (evt) {
  if (!dateIn.value || !dateOut.value) {
      evt.preventDefault();
      form.classList.remove('form-error');
      form.offsetWidth = form.offsetWidth;
      form.classList.add('form-error');

      if (!dateIn.value) {
        dateIn.focus();
      }
      else {
        dateOut.focus();
      }
    }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains('search-form-show')) {
      form.classList.remove('search-form-show');
      form.classList.remove('form-error');
      formWrap.classList.remove('form-wrap-show');
    }
  }
});
