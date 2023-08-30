let items = [
  ".hline1",
  ".hline2",
  ".hline3",
  ".hline4",
  ".vline1",
  ".vline2",
  ".vline3",
  ".vline4",
];
let a1;
let i = 0;
while (i < 8) {
  a1 = Math.floor(Math.random() * 17).toString() + "%";
  const line = document.querySelector(items[i]);
  console.log(items[i]);
  line.style.margin = a1;
  i += 1;
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
