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
  runForAbout(300); // istället för while-loop 1000ms
}, 3000);

// Ersätter document.write med DOM 
const msg = document.createElement("div");
msg.innerHTML = "<h2 style='color:black;'>HELLO</h2><p>Inserted without document.write()</p>";
document.body.prepend(msg);



// Ändrar bakgrund mer sällan 
setInterval(() => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}, 3000);

// Visar innehållet på sidan efter 5 sekunder
setTimeout(() => {
  document.body.style.display = "block";
}, 5000);

// Loggar lite istället för jättemycket
setTimeout(() => {
  for (let i = 0; i < 20; i++) console.log(i);
}, 1000);

for (let i = 0; i < 50; i++) console.log(i);












