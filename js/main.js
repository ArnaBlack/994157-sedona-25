'use strict';

var form = document.querySelector('.search-form');
var formWrap = document.querySelector('.form-wrap');
var showFormButton = document.querySelector('.btn-search');

showFormButton.addEventListener('click', function (evt) {
 evt.preventDefault();
 form.classList.toggle('search-form-show');
 formWrap.classList.toggle('form-wrap-show');
});
