function searchNvidia() {
  const query = document.getElementById("search-input").value;
  alert(`Searching for: ${query}`);
}

function exploreProducts() {
  alert("Explore NVIDIA's revolutionary products.");
}

function slideLeft() {
  alert("Sliding left to previous content.");
}

function slideRight() {
  alert("Sliding right to next content.");
}
const menuToggle = document.querySelector('.menu__toggle');
const navLinks = document.querySelector('.nav__links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const header = document.querySelector('nav');

  if (scrollPosition > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
  }
});
