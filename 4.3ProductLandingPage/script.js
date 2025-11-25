const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slidesContainer = document.querySelector('.slides-container');

let index = 0;

function getVisibleCards() {
  const containerWidth = slidesContainer.offsetWidth;
  const cardWidth = cards[0].offsetWidth + 32; // card + gap
  return Math.floor(containerWidth / cardWidth);
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 32; // card + gap
  slides.style.transform = `translateX(-${index * cardWidth}px)`;
}

function getMaxIndex() {
  const visibleCards = getVisibleCards();
  return Math.max(0, cards.length - visibleCards);
}

// Next button
next.addEventListener('click', () => {
  const maxIndex = getMaxIndex();
  if (index < maxIndex - 1) index++; // minus 1 to prevent extra space
  else index = 0;
  updateCarousel();
});

// Prev button
prev.addEventListener('click', () => {
  const maxIndex = getMaxIndex();
  if (index > 0) index--;
  else index = maxIndex - 1; // minus 1 here too
  updateCarousel();
});

// Auto slide (minus 1 card)
setInterval(() => {
  const maxIndex = getMaxIndex();
  if (index < maxIndex - 1) index++; // minus 1
  else index = 0;
  updateCarousel();
}, 2500);

// Update carousel on window resize
window.addEventListener('resize', () => {
  const maxIndex = getMaxIndex();
  if (index > maxIndex - 1) index = maxIndex - 1; // minus 1
  updateCarousel();
});
