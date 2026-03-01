// Simulerad blockering – men utan att frysa sidan
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

// Ersätter document.write med DOM (samma resultat, bättre praxis)
const msg = document.createElement("div");
msg.innerHTML = "<h2 style='color:black;'>HELLO</h2><p>Inserted without document.write()</p>";
document.body.prepend(msg);

// Tar bort blockering av tillbaka-knappen (dålig UX)
// history.pushState(null, "", location.href)
// window.onpopstate = () => history.go(1)

// Ändrar bakgrund mer sällan (mindre CPU)
setInterval(() => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}, 3000);

// Behåll “visa efter 5 sekunder” om du vill (men den är lite konstig UX)
setTimeout(() => {
  document.body.style.display = "block";
}, 5000);

// Loggar lite istället för jättemycket
setTimeout(() => {
  for (let i = 0; i < 20; i++) console.log(i);
}, 1000);

for (let i = 0; i < 50; i++) console.log(i);



// Simulerad blockering av tråden
/*setInterval(() => {
  let start = Date.now()
  while (Date.now() - start < 1000) {}
}, 3000)

// Skriver ut HTML direkt i dokumentet
document.write("<h1 style='color:black;'>HELLO FROM DOCUMENT.WRITE()</h1>")
document.write("<p>Another document.write() call</p>")

// Förhindrar användaren att navigera bakåt
history.pushState(null, "", location.href)
window.onpopstate = () => history.go(1)

// Ändrar bakgrundsfärgen slumpmässigt var 500ms
setInterval(() => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16)
}, 500)

// Visar innehållet på sidan efter 5 sekunder
setTimeout(() => {
  document.body.style.display = "block"
}, 5000)

// Loggar 10000 tal till konsolen efter 1 sekund
setTimeout(() => {
  for (let i = 0; i < 10000; i++) {
    console.log(i)
  }
}, 1000)

// Loggar 100 000 siffror direkt när sidan laddas
for (let i = 0; i < 100000; i++) {
  console.log(i)
}*/








