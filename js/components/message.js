// function createMessage(type, message)

function createMessage(type, message) {
  const html = `<div class="message ${type}">${message}</div>`;
  return html;
}
