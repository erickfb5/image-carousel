const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let index = 0;

// Change the displayed image
const changeImage = () => {
  // If the index is greater than the number of images, reset it to 0
  if (index > img.length - 1) {
    index = 0;
  } 
  // If the index is less than 0, set it to the last image
  else if (index < 0) {
    index = img.length - 1;
  }

  // Move the image container horizontally using CSS transform property
  imgs.style.transform = `translateX(${-index * 500}px)`;
};

const run = () => {
  index++;
  changeImage();
};

// Set the interval for the carousel to run every 2 seconds
let interval = setInterval(run, 2000);

// Reset the interval when a button is clicked
const resetInterval = ()=> {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

// Change the image to the next one
rightBtn.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});

// Change the image to the previous one
leftBtn.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});
