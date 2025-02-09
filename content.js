const colPage = document.querySelector('.col-page');
const parent = colPage.parentElement;

const chatSpace = document.createElement('div');
chatSpace.classList.add('chat-space');
parent.insertBefore(chatSpace, colPage);
chatSpace.style.width = '20%';