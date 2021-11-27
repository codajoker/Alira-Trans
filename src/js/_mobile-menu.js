const refs = {
  burgerBtn: document.querySelector('#burger-btn'),
  closeBtn: document.querySelector('#mobile-close'),
  mobileMenu: document.querySelector('#mobile-menu'),
  backdrop: document.querySelector('#backdrop'),
  modalLink: document.querySelectorAll('.mobile-nav__link'),
};
console.log(refs.modalLink);
refs.burgerBtn.addEventListener('click', onButtonClick);
refs.closeBtn.addEventListener('click', onButtonClick);
refs.modalLink.forEach(link => link.addEventListener('click', onButtonClick));
function onButtonClick(e) {
  document.body.classList.toggle('bg-scrolling-element-when-mobile-open');
  refs.backdrop.classList.toggle('is-hidden');
  refs.mobileMenu.classList.toggle('mobile-open');
}
