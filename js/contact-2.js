const fullName = document.querySelector("#full-name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const submitButton = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const users = document.querySelector(".users");

const messageContainer = document.querySelector(".message-container");
const message = createMessage();
messageContainer.innerHTML = message;
messageContainer.innerHTML = createMessage("success", "my message message");
form.addEventListener("submit", (event) => {
  const user = {
    name: fullName.value,
    subject: subject.value,
    email: email.value,
  };
  createUser(user);

  event.preventDefault();
});

function createMessage(type, message) {
  const html = `<div class="message ${type}">${message}</div>`;
  return html;
}

function createUser(user) {
  const element = document.createElement("div");
  element.classList.add("user-card");
  const heading = document.createElement("h2");
  const emailPara = document.createElement("p");
  const subjectPara = document.createElement("p");
  const addressPara = document.createElement("p");
  //
  heading.textContent = user.name;
  subjectPara.textContent = user.subject;
  emailPara.textContent = user.email;
  addressPara.textContent = user.address;
  //
  element.append(heading, subjectPara, emailPara, addressPara);
  users.append(element);
}

document.addEventListener("keyup", (event) => {
  if (nameCheck() && subjectCheck() && emailCheck() && addressCheck()) {
    console.log("all fields have a value");
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

function nameCheck() {
  const testRegEx = /^[a-zA-Z0-9 ]*$/;
  // if (fullName.value.length == 0) {
  //   console.log("failed");
  //   return false;
  // }
  return testRegEx.test(fullName.value);
}

function subjectCheck() {
  const testRegEx = /^[a-zA-Z0-9 ]*$/;
  if (subject.value.length > 10) {
    return testRegEx.test(subject.value);
  }
}

function addressCheck() {
  const testRegEx = /^[a-zA-Z0-9 ]*$/;
  if (subject.value.length > 10) {
    return testRegEx.test(address.value);
  }
}

function emailCheck() {
  if (!email.value) {
    return false;
  }

  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  return regEx.test(email.value);
}
