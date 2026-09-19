const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let next = 0;
const board = document.getElementById("board");
const status = document.getElementById("status");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function build() {
  next = 0;
  board.innerHTML = "";
  status.textContent = "Next: A";
  for (const ch of shuffle(letters)) {
    const btn = document.createElement("button");
    btn.className = "letter";
    btn.textContent = ch;
    btn.onclick = () => {
      if (ch === letters[next]) {
        btn.classList.add("done");
        btn.disabled = true;
        next++;
        status.textContent = next >= 26 ? "Done!" : `Next: ${letters[next]}`;
      } else {
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 300);
      }
    };
    board.appendChild(btn);
  }
}

document.getElementById("reset").onclick = build;
build();
