const slider = document.querySelector('.slider');
const slideText = slider.querySelector('.slide-item');
const slideOne = slider.querySelector('.slide-1');
const slideTwo = slider.querySelector('.slide-2');
const slideThree = slider.querySelector('.slide-3');
const buttonOne = slider.querySelector('.button-one');
const buttonTwo = slider.querySelector('.button-two');
const buttonThree = slider.querySelector('.button-three');

buttonOne.addEventListener('click', function(evt) {
  evt.preventDefault();
  slider.classList.add('slider-1');
  slider.classList.remove('slider-2');
  slider.classList.remove('slider-3');
  slideOne.classList.add('slide-current');
  slideTwo.classList.remove('slide-current');
  slideThree.classList.remove('slide-current');
  buttonOne.classList.add('current');
  buttonTwo.classList.remove('current');
  buttonThree.classList.remove('current');
});

buttonTwo.addEventListener('click', function(evt) {
  evt.preventDefault();
  slider.classList.add('slider-2');
  slider.classList.remove('slider-1');
  slider.classList.remove('slider-3');
  slideTwo.classList.add('slide-current');
  slideOne.classList.remove('slide-current');
  slideThree.classList.remove('slide-current');
  buttonOne.classList.remove('current');
  buttonTwo.classList.add('current');
  buttonThree.classList.remove('current');
});

buttonThree.addEventListener('click', function(evt) {
  evt.preventDefault();
  slider.classList.add('slider-3');
  slider.classList.remove('slider-2');
  slider.classList.remove('slider-1');
  slideThree.classList.add('slide-current');
  slideTwo.classList.remove('slide-current');
  slideOne.classList.remove('slide-current');
  buttonOne.classList.remove('current');
  buttonTwo.classList.remove('current');
  buttonThree.classList.add('current');
});
