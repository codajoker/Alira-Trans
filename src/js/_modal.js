const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('#backdrop'),
  mobileMenu: document.querySelector('#mobile-menu'),
};

refs.openModalBtn.forEach(button => button.addEventListener('click', openModal));
refs.closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  document.body.classList.add('bg-scrolling-element-when-mobile-open');
  refs.mobileMenu.classList.remove('mobile-open');
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.remove('is-hidden');
}

function closeModal() {
  document.body.classList.remove('bg-scrolling-element-when-mobile-open');
  refs.backdrop.classList.add('is-hidden');
  refs.modal.classList.add('is-hidden');
}
