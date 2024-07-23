document.querySelector("#first-name").addEventListener("focusout", firstNameValid);
document.querySelector("#last-name").addEventListener("focusout", lastNameValid);
document.querySelector("#message").addEventListener("focusout", messageValid);
// document.querySelector("#email").addEventListener("focusuot", emailValidregex);


const btn = document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  firstNameValid();
  lastNameValid();
  messageValid();
  emailValidregex();
  radioChecked();
  consentValid();
});


function firstNameValid() {
  const firstName = document.getElementById("first-name");
  if (firstName.value == "") {
    firstName.classList.add("err");
    firstName.nextElementSibling.textContent = "This field is required";
  }else {
    firstName.classList.remove("err");
    firstName.nextElementSibling.textContent = "";
  }
};


function lastNameValid() {
  const lastName = document.getElementById("last-name");
  if (lastName.value == "") {
    lastName.classList.add("err");
    lastName.nextElementSibling.textContent = "This field is required";

  }else {
    lastName.classList.remove("err");
    lastName.nextElementSibling.textContent = "";
  }
}

function messageValid() {
  const message = document.getElementById("message");
  if (message.value == "") {
    message.classList.add("err");
    message.nextElementSibling.textContent = "This field is required";

  }else {
    message.classList.remove("err");
    message.nextElementSibling.textContent = "";
}
}

function emailValidregex() {
  const email = document.getElementById("email");
  const regExMail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.value == "") {
    email.classList.add("err");
    email.nextElementSibling.textContent = "This field is required";
  }else {
    email.addEventListener("keyup", (e) => {
      if(!(regExMail.test(e.target.value))){
      email.setAttribute("class", "err");
      email.nextElementSibling.textContent = "This field is required";
      }else {
      email.classList.remove("err");
      email.nextElementSibling.textContent = "";
      }
    })
  }
}


function radioChecked() {
const support = document.querySelector("#support-request");
const general = document.querySelector("#general-enquiry");

if (!(support.checked || general.checked)) {
  general.parentElement.classList.add('err');
  support.parentElement.classList.add('err');
}else {
  general.parentElement.classList.remove('err');
  support.parentElement.classList.remove('err');
}
}

function consentValid() {
  const consent = document.querySelector("#consent");
  const formConsent = document.querySelector(".form__consent--inner");
  if (!consent.checked) {
    formConsent.nextElementSibling.textContent = "To submit this form, please consent to being contacted";
  }else {
    formConsent.nextElementSibling.textContent = "";
  }
}