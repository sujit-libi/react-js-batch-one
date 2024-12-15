document.querySelector('.btn--roll').addEventListener('click', () => {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNum);

  document.querySelector('.dice').src = `dice-${randomNum}.png`;
});
