const items = document.querySelectorAll('.item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dots = document.querySelectorAll('.dot');
const numberDisplay = document.querySelector('.numbers');

let currentIndex = 0;
const totalItems = items.length;

function updateSlider(index) {
  // esconder todos
  items.forEach((item) => item.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // mostrar o atual
  items[index].classList.add('active');
  dots[index].classList.add('active');

  // atualizar número, formatando com zero à esquerda
  numberDisplay.textContent = (index + 1).toString().padStart(2, '0');
}

function showNext() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSlider(currentIndex);
}

// Event listeners
nextBtn.addEventListener('click', () => {
  showNext();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  showPrev();
  resetAutoSlide();
});

// Controle pelos dots
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateSlider(currentIndex);
    resetAutoSlide();
  });
});

// Auto slide a cada 5 segundos
let autoSlide = setInterval(showNext, 5000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(showNext, 5000);
}

// Inicializa
updateSlider(currentIndex);
