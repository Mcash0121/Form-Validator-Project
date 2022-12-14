const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error  message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email is valid

function isValidEmail(email) {
  const re = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return re.test(email);
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      console.log(input.id);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Even Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
