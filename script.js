document.querySelectorAll('#block_text_règlement p').forEach(p => {
  const imgElement = document.createElement('img');
  imgElement.src = "https://ngtri23.github.io/images/Logo_AWTD_2.png";
  imgElement.style.width = "7vh";
  imgElement.style.display = "block";
  imgElement.style.margin = "3.5vw auto";
  p.insertAdjacentElement('afterend', imgElement);
});

document.querySelectorAll('.text_page div').forEach(div => {
  const imgElement = document.createElement('img');
  imgElement.src = "https://ngtri23.github.io/images/Logo_AWTD_2.png";
  imgElement.style.width = "5vh";
  imgElement.style.display = "block";
  imgElement.style.margin = "3.5vw auto";
  div.insertAdjacentElement('afterend', imgElement);
});

function openLightbox(src){
  document.getElementById('image_lightbox').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox(){
  document.getElementById('lightbox').style.display = 'none';
}
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
}

function go_left() {
  const slider = document.querySelector('.photo-accueil');
  const imageSize = window.innerWidth * 0.32;
  if (slider.scrollLeft <= imageSize) {
    slider.scrollLeft = slider.scrollWidth / 2;
  } else {
    slider.scrollBy({
      left: -imageSize,
      behavior: 'smooth'
    });
  }}

function go_right() {
  const slider = document.querySelector('.photo-accueil');
  const imageSize = window.innerWidth * 0.32;
  if (slider.scrollLeft + slider.clientWidth + imageSize >= slider.scrollWidth) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollBy({
      left: imageSize,
      behavior: 'smooth'
    });
  }}


const photoAccueil = document.querySelector('.photo-accueil');

let isDragging = false;
let startX;
let scrollLeft;
let isScrolling = false;

window.addEventListener('load', () => {
  const scrollMax = photoAccueil.scrollWidth / 2;
  photoAccueil.scrollLeft = scrollMax;
});

photoAccueil.addEventListener('mousedown', (e) => {
 isDragging = true;
 photoAccueil.classList.add('dragging');
 startX = e.pageX - photoAccueil.offsetLeft;
 scrollLeft = photoAccueil.scrollLeft;
 photoAccueil.style.userSelect = 'none';
});

photoAccueil.addEventListener('mouseleave', () => {
 isDragging = false;
 photoAccueil.classList.remove('dragging');
 photoAccueil.style.userSelect = '';
});

photoAccueil.addEventListener('mouseup', () => {
 isDragging = false;
 photoAccueil.classList.remove('dragging');
 photoAccueil.style.userSelect = '';
});

photoAccueil.addEventListener('mousemove', (e) => {
 if (!isDragging) return;
 e.preventDefault();
 const x = e.pageX - photoAccueil.offsetLeft;
 const walk = (x - startX) * 3; // le multiplicateur ajuste la vitesse du scroll
 photoAccueil.scrollLeft = scrollLeft - walk;
});

photoAccueil.addEventListener('scroll', () => {
  if (isScrolling) return;
  isScrolling = true;

  requestAnimationFrame(() => {
    const scrollMax = photoAccueil.scrollWidth / 2;

    if (photoAccueil.scrollLeft >= scrollMax) {
      photoAccueil.scrollLeft -= scrollMax;
    }

    if (photoAccueil.scrollLeft <= 0) {
      photoAccueil.scrollLeft += scrollMax;
    }

    isScrolling = false;
  });
});
