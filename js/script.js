let fetchbtn = document.querySelector('.fetch');

num = 0;

fetchbtn.addEventListener('click', () => {
  async function fetchjoke() {
    let res = await fetch('https://api.chucknorris.io/jokes/random');

    let joke = await res.json();

    console.log(joke);

    let jokesbox = document.querySelector('.jokebox');

    jokesbox.textContent = joke.value;

    const total = document.querySelector('.total');

    num = 0;

    total.textContent = `total like/dislike-${num}`;
  }
  fetchjoke();
});

const like = document.querySelector('.like');

like.addEventListener('click', function quantity() {
  num++;

  const total = document.querySelector('.total');

  total.textContent = `total like/dislike-${num}`;
});

const dislike = document.querySelector('.dislike');

dislike.addEventListener('click', function quantity() {
  num--;

  const total = document.querySelector('.total');

  total.textContent = `total like/dislike-${num}`;
});
