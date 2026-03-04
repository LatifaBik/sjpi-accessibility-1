// Simulerad blockering 
function runForAbout(ms) {
  const endTime = performance.now() + ms;

  function step() {
    for (let i = 0; i < 2000; i++) {}
    if (performance.now() < endTime) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

setInterval(() => {
  runForAbout(300);
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
  // Se till att <main> finns
  let main = document.querySelector("main");
  if (!main) {
    main = document.createElement("main");
    document.body.appendChild(main);
  }

  // Lägg meddelandet INUTI en landmark (main) istället för direkt i body
  const msg = document.createElement("section");
  msg.setAttribute("aria-label", "Intro message");
  msg.innerHTML = `
    <h2 style="color:white;">HELLO</h2>
    <p style="color:white;">Inserted without document.write()</p>
  `;
  main.prepend(msg);

  // Ändrar bakgrund mer sällan
  setInterval(() => {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  }, 3000);

  
  setTimeout(() => {
    document.body.style.display = "block";
  }, 5000);

  // Loggar lite istället för jättemycket
  setTimeout(() => {
    for (let i = 0; i < 20; i++) console.log(i);
  }, 1000);

  for (let i = 0; i < 50; i++) console.log(i);
});











