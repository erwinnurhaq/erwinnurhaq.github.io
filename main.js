const crosshairV = document.querySelector(".n-crosshair-v");
const crosshairH = document.querySelector(".n-crosshair-h");
const cursorOne = document.querySelector(".n-cursor-one");
const cursorTwo = document.querySelector(".n-cursor-two");
const footerYear = document.getElementById("footer-year");

const hoverableTagName = ['A', 'H1', 'H2', 'H3']
let mouseX = 0;
let mouseY = 0;
let hoverable = false;
let needsUpdate = false;

function mouseMove({ clientX, clientY, target }) {
  mouseX = clientX;
  mouseY = clientY;
  hoverable = target.getAttribute("data-hoverable") !== null || hoverableTagName.includes(target.tagName);
  needsUpdate = true;
}

function mouseDown() {
  cursorOne.classList.add("n-cursor-down");
}

function mousesUp() {
  cursorOne.classList.remove("n-cursor-down");
}

function updateCursor() {
  if (needsUpdate) {
    crosshairV.style.left = `${mouseX}px`;
    crosshairH.style.top = `${mouseY}px`;
    cursorOne.style.left = `${mouseX}px`;
    cursorOne.style.top = `${mouseY}px`;
    cursorTwo.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0) rotate(45deg)`;
    cursorTwo.style.borderWidth = hoverable ? `4px` : `1px`;
    needsUpdate = false;
  }
  requestAnimationFrame(updateCursor);
}

window.addEventListener("mousemove", mouseMove);
window.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mousesUp);
footerYear.innerHTML = new Date().getFullYear();
console.info(`> Ich bin gut. lololol ∘ ∘ ∘ ( °ヮ° )' `);
requestAnimationFrame(updateCursor);