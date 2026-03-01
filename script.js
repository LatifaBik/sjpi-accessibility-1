// Simulerad blockering av tråden
function runForAbout(ms) {
  const endTime = performance.now() + ms;

  function step() {
    for (let i = 0; i < 2000; i++) {}
    if (performance.now() < endTime) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

setInterval(() => {
  runForAbout(300);
}, 3000);

// Byt bakgrund vid klick istället
document.body.addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});








