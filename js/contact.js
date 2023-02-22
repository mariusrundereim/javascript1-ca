const fullName = document.querySelector("#full-name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const submitButton = document.querySelector("#btn-submit");
const form = document.querySelector("form");
const users = document.querySelector(".users");

form.addEventListener("submit", (event) => {
  const user = {
    name: fullName.value,
    subject: subject.value,
    email: email.value,
  };
  createUser(user);
  event.preventDefault();
});

function createUser(user) {
  const element = document.createElement("div");
  element.classList.add("user-card");
  const heading = document.createElement("h2");
  const emailPara = document.createElement("p");
  const subjectPara = document.createElement("p");
  //
  heading.textContent = user.name;
  subjectPara.textContent = user.subject;
  emailPara.textContent = user.email;
  //
  element.append(heading, subjectPara, emailPara);
  users.append(element);
}

document.addEventListener("keyup", (event) => {
  if (nameCheck() && emailCheck()) {
    console.log("all fields have a value");
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

function nameCheck() {
  const testRegEx = /^[a-z0-9_-]{10,20}$/;
  return testRegEx.test(fullName.value);
}

function emailCheck() {
  if (!email.value) {
    return false;
  }

  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  return regEx.test(email.value);
}
