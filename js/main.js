
var form = document.querySelector('.search-form');
var formWrap = document.querySelector('.form-wrap');
var showFormButton = document.querySelector('.btn-search');
var dateIn = form.querySelector('[name=check-in]');
var dateOut = form.querySelector('[name=check-out]');
var grownups = form.querySelector('[name=grownups]');
var children = form.querySelector('[name=children]');

var isStorageSupport = true;
var storageChildren = "";
var storageGrownups  = "";

  try {
    storageGrownups = localStorage.getItem("grownups");
    storageChildren = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

showFormButton.addEventListener('click', function (evt) {
 evt.preventDefault();
 form.classList.toggle('search-form-show');
 form.classList.remove('form-error');
 formWrap.classList.toggle('form-wrap-show');

 if (storageGrownups) {
      grownups.value = storageGrownups;
    }
 if (storageChildren) {
       children.value = storageChildren;
 }
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
  else {
  if (isStorageSupport) {
    localStorage.setItem("grownups", grownups.value);
    localStorage.setItem("children", children.value);
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
