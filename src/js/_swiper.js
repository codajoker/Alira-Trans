import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.css';

const swiperContainer = document.querySelector('.swiper');

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: true,
});
