let textElement = document.getElementById("animated-text");
let textToAnimate = "Welcome to my portfolio";
let index = 0;

function typeText() {
  if (index < textToAnimate.length) {
    textElement.innerHTML += textToAnimate[index];
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();
