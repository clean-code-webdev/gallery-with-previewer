function createImg() {
  let el = document.querySelector("#preview-holder");

  for (let i = 0; i < 8; i++) {
    el.innerHTML += `
    <div class="preview">
      <img src="./img/pic-${i + 1}.jpg" alt="picture" />
    </div>`;
  }
}

createImg();

function loadDogGallery() {
  let images = document.querySelectorAll(".preview > img");
  let viewer = document.querySelector("#viewer > img");

  // load viewer img
  viewer.src = images[0].src;

  images.forEach((image) =>
    image.addEventListener("click", () => (viewer.src = image.src))
  );
}

loadDogGallery();
