const refs = {
  burgerBtn: document.querySelector('#burger-btn'),
  closeBtn: document.querySelector('#mobile-close'),
  mobileMenu: document.querySelector('#mobile-menu'),
  backdrop: document.querySelector('#backdrop'),
};

refs.burgerBtn.addEventListener('click', onButtonClick);
refs.closeBtn.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  document.body.classList.toggle('bg-scrolling-element-when-mobile-open');
  refs.backdrop.classList.toggle('is-hidden');
  refs.mobileMenu.classList.toggle('mobile-open');
}
