document.querySelectorAll('#block_text_règlement p').forEach(p => {
  const imgElement = document.createElement('img');
  imgElement.src = "https://ngtri23.github.io/images/Logo_AWTD_2.png";
  imgElement.style.width = "7vh";
  imgElement.style.display = "block";
  imgElement.style.margin = "3.5vw auto";
  p.insertAdjacentElement('afterend', imgElement);
});

document.querySelectorAll('.text_page p').forEach(p => {
  const imgElement = document.createElement('img');
  imgElement.src = "https://ngtri23.github.io/images/Logo_AWTD_2.png";
  imgElement.style.width = "5vh";
  imgElement.style.display = "block";
  imgElement.style.margin = "3.5vw auto";
  p.insertAdjacentElement('afterend', imgElement);
});

function openLightbox(src){
  document.getElementById('image_lightbox').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox(){
  document.getElementById('lightbox').style.display = 'none';
}
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

const slider = document.querySelector('.photo-accueil');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});



const imageSize = window.innerWidth * 0.32;

function go_left() {
  if (slider.scrollLeft <= imageSize) {
    slider.scrollLeft = slider.scrollWidth / 2;
  } else {
    slider.scrollBy({
      left: -imageSize,
      behavior: 'smooth'
    });
  }
}

function go_right() {
  if (slider.scrollLeft + slider.clientWidth + imageSize >= slider.scrollWidth) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollBy({
      left: imageSize,
      behavior: 'smooth'
    });
  }
}
