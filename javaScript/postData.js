const title = document.querySelector('#name2');
const author = document.querySelector('#author');

const options = (titleValue, authorValue) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: titleValue,
      author: authorValue,
    }),
  };
};

const addPost = (e) => {
  e.preventDefault();
  titleValue = title.value;
  authorValue = author.value;
  fetch('http://localhost:3000/books', options(titleValue, authorValue))
    .then(() => {
      const afterPosting = document.querySelector('.afterPosting');
      const paragraph = document.createElement('p');
      paragraph.textContent =
        'Your post was added! Refresh the page to see your book!';
      afterPosting.appendChild(paragraph);
    })
    .catch((err) => {
      'Something went wrong when trying to add a new book', err;
    });
};

const form = document.querySelector('form');

form.addEventListener('submit', addPost);
