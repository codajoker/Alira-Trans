const refs = {
  navLink: document.querySelector('.nav__dropdown'),
  dropdown: document.querySelector('.dropdown__wrapper'),
};

refs.navLink.addEventListener('mouseenter', onNavLinkHover);
refs.navLink.addEventListener('focusin', onNavLinkHover);
refs.navLink.addEventListener('mouseleave', onNavLinkOut);
refs.navLink.addEventListener('focusout', onNavLinkOut);

function onNavLinkHover(e) {
  refs.dropdown.classList.add('dropdown-is-open');
}

function onNavLinkOut() {
  refs.dropdown.classList.remove('dropdown-is-open');
}
