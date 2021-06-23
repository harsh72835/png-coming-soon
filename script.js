var btn = document.querySelector(".btn");
var formContainer = document.querySelector(".form__container");
var emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var inputValue = document.querySelector(".form-input").value;

var testInput = (e) => {
  e.preventDefault();
  if (emailRegex.test(inputValue)) {
    formContainer.classList.remove("show-error");

    location.reload();
  } else {
    formContainer.classList.add("show-error");
  }
};

btn.addEventListener("click", testInput);
