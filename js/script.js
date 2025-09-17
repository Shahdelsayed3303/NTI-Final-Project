let btn = document.querySelector("#btn");
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (scrollY >= 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
let form = document.getElementById("contact-form");
let userName = document.getElementById("userName");
let phoneNumber = document.getElementById("phoneNumber");
let email = document.getElementById("email");
let massage = document.getElementById("massage");
// showError
function showError(input, massage) {
  let formControl = input.parentElement;
  formControl.className = "content-form-error";
  let span = formControl.querySelector("span");
  span.innerText = massage;
}
// showInput
function showInput(input) {
  let formControl = input.parentElement;
  formControl.className = "content-form";
}
form.addEventListener("submit", (e) => {
  let isvaild = true;
  // userName vaild
  if (userName.value.trim() === "") {
    showError(userName, "User name is required");
    isvaild = false;
  } else if (
    userName.value.trim() !== String &&
    userName.value.trim().length <= 2
  ) {
    showError(userName, " pless enter a valid user name");
  } else {
    showInput(userName);
  }
  // number vaild
  if (phoneNumber.value.trim() === "") {
    showError(phoneNumber, "phone is required");
    isvaild = false;
  } else if (phoneNumber.value.trim().length !== 11) {
    showError(phoneNumber, "enter a valid phone number with 11 numbers ");
    isvaild = false;
  } else {
    showInput(phoneNumber);
  }
  // email vaild
  if (email.value.trim() === "") {
    showError(email, "email is required");
    isvaild = false;
  } else {
    showInput(email);
  }
  // massage vaild
  if (massage.value.trim() === "") {
    showError(massage, "massage is required");
    isvaild = false;
  } else {
    showInput(massage);
  }
  if (isvaild === false) {
    e.preventDefault();
  }
});
