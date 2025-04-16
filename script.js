document.querySelectorAll('#block_text_règlement p').forEach(p => {
  const imgElement = document.createElement('img');
  imgElement.src = "https://ngtri23.github.io/images/logo_AWTD.png";
  imgElement.style.width = "7vh";
  imgElement.style.display = "block";
  imgElement.style.margin = "3.5vw auto";
  p.insertAdjacentElement('afterend', imgElement);
});

document.querySelectorAll('.text_page p').forEach(p => {
  const imgElement = document.createElement('img');
  imgElement.src = "https://ngtri23.github.io/images/logo_AWTD.png";
  imgElement.style.width = "5vh";
  imgElement.style.display = "block";
  imgElement.style.margin = "3.5vw auto";
  p.insertAdjacentElement('afterend', imgElement);
});


const scrollContainer = document.querySelector('.photo-accueil');
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  scrollContainer.classList.add('active');
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
  scrollContainer.style.cursor = 'grabbing';
});

scrollContainer.addEventListener('mouseleave', () => {
  isDown = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mouseup', () => {
  isDown = false;
  scrollContainer.style.cursor = 'grab';
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 1; // sensibilité
  scrollContainer.scrollLeft = scrollLeft - walk;
});
