const booksList = document.querySelector('.books-list');
const container = document.createElement('div');
container.setAttribute('class', 'container');
booksList.appendChild(container);

const url = 'http://localhost:3000/books';

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((book) => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = book.name;

      const p = document.createElement('p');
      p.textContent = book.author;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } catch (err) {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Something went wrong when trying to get books';
    booksList.appendChild(errorMessage);
  }
}

getData();
