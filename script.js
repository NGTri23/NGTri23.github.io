document.querySelectorAll('.block_text p').forEach(p => {
  const imgElement = document.createElement('img');
  imgElement.src = "https://ngtri23.github.io/images/logo_AWTD.png";
  imgElement.style.width = "3vw";
  imgElement.style.marginTop = "1vw";
  imgElement.style.display = "block";
  imgElement.style.margin = "1vw auto";
  p.insertAdjacentElement('afterend', imgElement);
});
