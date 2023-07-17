import './styles.css';

function getUsersData() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(function (
    response,
  ) {
    return response.json();
  });
}
function sendDeleteRequest(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'DELETE',
  });
}
function getUserRow(email, name, id) {
  const row = document.createElement('div');
  const paragraph = document.createElement('p');
  const button = document.createElement('button');
  button.innerText = 'DELETE';
  button.addEventListener('click', function () {
    return sendDeleteRequest(id);
  });
  paragraph.innerText = `${email} ${name} `;
  paragraph.append(button);
  row.append(paragraph);
  return row;
}

function renderUserData() {
  const wrapper = document.querySelector('.wrapper');
  if (!wrapper) {
    return;
  }
  getUsersData().then((users) => {
    users.forEach(function ({ email, name, id }) {
      const row = getUserRow(email, name, id);
      wrapper.append(row);
    });
  });
}

renderUserData();
