'use strict';

var form = document.querySelector('.search-form');
var showFormButton = document.querySelector('.btn-search');

showFormButton.addEventListener('click', function (evt) {
 evt.preventDefault();
 form.classList.toggle('search-form-show');
});
