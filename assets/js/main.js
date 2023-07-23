document.addEventListener('DOMContentLoaded', function () {

  let spanRequired = document.querySelector('label .span');
  let inputEmail = document.querySelector('#email');
  let form = document.querySelector('.form');
  let modal = document.querySelector('.modal');

  let expReg = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  inputEmail.addEventListener('keyup', function (e) {
    if (expReg.test(inputEmail.value) === false) {
      inputEmail.classList.add('input_required');
      spanRequired.textContent = "Valid email required";
    } else {
      inputEmail.classList.remove('input_required');
      spanRequired.textContent = "";
    }
  });

  form.addEventListener('submit', function (e) {

    e.preventDefault();

    if (inputEmail.value == '' || expReg.test(inputEmail.value) === false) {
      inputEmail.classList.add('input_required');
      spanRequired.textContent = "Valid email required";
      return false;
    }

    modal.classList.add('success');

    modal.querySelector('p b').textContent = inputEmail.value;

    return true;
  });

  modal.querySelector('button').addEventListener('click', function(){
    window.location.reload()
  });

});