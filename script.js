const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "MY KITTY CAT <3";
  gif.src = "https://tenor.com/view/cute-cat-gif-18728047.gif";
});

// Function to check if two buttons overlap
function isOverlapping(btn1, btn2) {
  const rect1 = btn1.getBoundingClientRect();
  const rect2 = btn2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const yesBtnRect = yesBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  let randomX, randomY;

  do {
    randomX = Math.floor(Math.random() * maxX);
    randomY = Math.floor(Math.random() * maxY);

    // Update the button's position
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  } while (isOverlapping(yesBtn, noBtn)); // Check if the buttons overlap
});
