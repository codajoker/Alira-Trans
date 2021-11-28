const input = document.querySelector('.button-switch__toggle');
const title = document.querySelector('.offers-title');

input.addEventListener('change', async e => {
  const { top: cardHeight } = title.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
  setTimeout(() => {
    input.checked = false;
  }, 2000);
  console.log(title.getBoundingClientRect());
});
