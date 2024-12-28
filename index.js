// -- 1 -- //
const images = document.querySelectorAll(".image");
const imagesArray = Array.from(images);
const fullImages = document.querySelectorAll(".full-image");
const fullImagesArray = Array.from(fullImages);
const rightArrow = document.querySelector(".arrow2");
const leftArrow = document.querySelector(".arrow1");
const cross = document.querySelector(".cross");
const backdrop = document.querySelector(".backdrop");

images.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    const index2 = fullImagesArray.indexOf(
      fullImagesArray.find(
        (image) => image.classList.contains("is-hidden") === false
      )
    );
    if (index2 !== -1) {
      fullImages[index2].classList.add("is-hidden");
    }
    fullImages[index].classList.remove("is-hidden");
    fullImagesArray[index].classList.remove("is-hidden");
    rightArrow.classList.remove("is-hidden");
    leftArrow.classList.remove("is-hidden");
    cross.classList.remove("is-hidden");
    backdrop.classList.add("full-image-container");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    const index = fullImagesArray.indexOf(
      fullImagesArray.find(
        (image) => image.classList.contains("is-hidden") === false
      )
    );
    fullImages[index].classList.add("is-hidden");
    if (index !== 5) {
      fullImages[index + 1].classList.remove("is-hidden");
    } else {
      fullImages[0].classList.remove("is-hidden");
    }
  } else if (event.code === "ArrowLeft") {
    const index = fullImagesArray.indexOf(
      fullImagesArray.find(
        (image) => image.classList.contains("is-hidden") === false
      )
    );
    fullImages[index].classList.add("is-hidden");
    if (index !== 0) {
      fullImages[index - 1].classList.remove("is-hidden");
    } else {
      fullImages[5].classList.remove("is-hidden");
    }
  } else if (event.code === "Escape") {
    fullImages[
      fullImagesArray.indexOf(
        fullImagesArray.find(
          (image) => image.classList.contains("is-hidden") === false
        )
      )
    ].classList.add("is-hidden");
    rightArrow.classList.add("is-hidden");
    leftArrow.classList.add("is-hidden");
    cross.classList.add("is-hidden");
    backdrop.classList.remove("full-image-container");
  }
});

rightArrow.addEventListener("click", (event) => {
  const index = fullImagesArray.indexOf(
    fullImagesArray.find(
      (image) => image.classList.contains("is-hidden") === false
    )
  );
  fullImages[index].classList.add("is-hidden");
  if (index !== 5) {
    fullImages[index + 1].classList.remove("is-hidden");
  } else {
    fullImages[0].classList.remove("is-hidden");
  }
});

leftArrow.addEventListener("click", (event) => {
  const index = fullImagesArray.indexOf(
    fullImagesArray.find(
      (image) => image.classList.contains("is-hidden") === false
    )
  );
  fullImages[index].classList.add("is-hidden");
  if (index !== 0) {
    fullImages[index - 1].classList.remove("is-hidden");
  } else {
    fullImages[5].classList.remove("is-hidden");
  }
});

cross.addEventListener("click", (event) => {
  fullImages[
    fullImagesArray.indexOf(
      fullImagesArray.find(
        (image) => image.classList.contains("is-hidden") === false
      )
    )
  ].classList.add("is-hidden");
  rightArrow.classList.add("is-hidden");
  leftArrow.classList.add("is-hidden");
  cross.classList.add("is-hidden");
  backdrop.classList.remove("full-image-container");
});

// -- 2 -- //
const bigBox = document.querySelector("#boxes");
const createBoxes = function (amount) {
  let boxesLayout = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    boxesLayout.push(
      `<div style="width: ${size}px; height: ${size}px; background: rgb(${
        Math.random() * 254 + 1
      }, ${Math.random() * 254 + 1}, ${Math.random() * 254 + 1});"></div>`
    );
    size += 10;
  }
  const boxesList = boxesLayout.join("");
  bigBox.innerHTML = boxesList;
};
const destroyBoxes = function () {
  bigBox.innerHTML = "";
};

const input = document.querySelector("input");
const createButton = document.querySelector('button[data-action="render"]');
const deleteButton = document.querySelector('button[data-action="destroy"]');

input.addEventListener("change", (event) => {
  createButton.addEventListener("click", (event2) =>
    createBoxes(event.target.value)
  );
});
deleteButton.addEventListener("click", (event) => destroyBoxes());
