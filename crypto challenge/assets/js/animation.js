'use strict';

// hero
const heroTextContainer = document.querySelector('.hero-text-container');
const heroImgContainer = document.querySelector('.hero-img');
const animateEl = document.querySelectorAll('.animate');

heroTextContainer.classList.remove('hidden-left');
heroImgContainer.classList.remove('hidden-right');

const observerFunction = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('animate');
  entry.target.style.transition = '1.5s ease';
  entry.target.style.transitionProperty = 'opacity,transform';
  console.log(entry);
  console.log(entry.target);
};
const options = {
  root: null,
  threshold: 0.2,
};
const observer = new IntersectionObserver(observerFunction, options);

animateEl.forEach(element => {
  observer.observe(element);
});
