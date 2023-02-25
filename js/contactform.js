const name = document.querySelector(".name");
const subject = document.querySelector(".subject");
const address = document.querySelector(".address");
const email = document.querySelector(".email");
const form = document.querySelector("form");
const messageContainer = document.querySelector(".message-container");

function createMessage(type, message) {
  const html = `<div class="message ${type}">${message}</div>`;
  return html;
}

form.addEventListener("submit", (event) => {
  messageContainer.innerHTML = "";
  check();
  createMessage();
  event.preventDefault();
});

function check() {
  if (name.value) {
    console.log("navn finnes");
    messageContainer.innerHTML += createMessage("success", "Name is Good!");
  } else {
    messageContainer.innerHTML += createMessage(
      "warning",
      "Please, fill out a name!"
    );
    console.log("navn finnes ikke");
  }

  if (subject.value.length <= 10) {
    messageContainer.innerHTML += createMessage(
      "warning",
      "Fill out a subject, Chuck Norris!"
    );
    console.log("Lengde:", subject.value.length, false);
  } else {
    messageContainer.innerHTML += createMessage(
      "success",
      "You are soooo Good!"
    );
    console.log("Lengde:", subject.value.length, true);
  }
  console.log(address.value.length);

  if (email.value) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    console.log(regEx.test(email.value));
    messageContainer.innerHTML += createMessage("success", "Good!");
  } else {
    console.log("Not valid!");
    messageContainer.innerHTML += createMessage(
      "warning",
      "Please fill out a valid e-mail!"
    );

    if (address.value.length <= 25) {
      messageContainer.innerHTML += createMessage("warning", "Fill in address");
      console.log("Lengde:", address.value.length, false);
    } else {
      messageContainer.innerHTML += createMessage(
        "success",
        "Good! Address is success"
      );
      console.log("Lengde:", address.value.length, true);
    }
  }
}
