let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed on', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during lunch', 'while I was praying'];

function generateExcuse() {
  let excuse =
    who[Math.floor(Math.random() * who.length)] + " " +
    action[Math.floor(Math.random() * action.length)] + " " +
    what[Math.floor(Math.random() * what.length)] + " " +
    when[Math.floor(Math.random() * when.length)];
  document.getElementById("excuse").innerText = excuse;
}

// Run once on page load
window.onload = generateExcuse;

// Also trigger when button is clicked
document.getElementById("generateBtn").addEventListener("click", generateExcuse);
