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
  refs.mobileMenu.classList.remove('mobile-open');
  refs.backdrop.classList.remove('is-hidden');
  refs.modal.classList.remove('is-hidden');
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  refs.modal.classList.add('is-hidden');
}
