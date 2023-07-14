import './styles.css';

function getUsersData() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(function (
    response,
  ) {
    return response.json();
  });
}

function getUserRow(email, name) {
  const row = document.createElement('div');
  const paragraph = document.createElement('p');
  paragraph.innerText = `${email} ${name}`;
  row.append(paragraph);
  return row;
}

function renderUserData() {
  const wrapper = document.querySelector('.wrapper');
  if (!wrapper) {
    return;
  }
  getUsersData().then((users) => {
    users.forEach(function ({ email, name }) {
      const row = getUserRow(email, name);
      wrapper.append(row);
    });
  });
}

renderUserData();
