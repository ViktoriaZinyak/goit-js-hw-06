const button = document.querySelector("button");
const form = document.querySelector(".login-form");
const inputData = {};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  const formData = new FormData(event.currentTarget);
  event.preventDefault();
  formData.forEach((val, prop) => {
    if (val === "") {
      alert("Please fill in all the fields!");
    }
    inputData[prop] = val;
    console.log(inputData);
  });
  event.currentTarget.reset();
}

// const form = document.querySelector(".login-form");
// const inputEmail = document.querySelector("[name='email']");
// const inputPassword = document.querySelector("[name='password']");
// const inputData = {};
// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   if (inputEmail.value === "" || inputPassword.value === "") {
//     alert("Please fill in all the fields!");
//   }
//   event.currentTarget.elements.forEach((element) => {
//     inputData[element] = element.value;
//     console.log(inputData);
//   });
//   event.currentTarget.reset();
// }
