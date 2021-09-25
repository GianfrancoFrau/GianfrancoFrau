window.addEventListener("load", function () {

  /*
  const togglers = document.querySelectorAll(".section > h3");
  Array.from(togglers).map((h3) => {
    h3.addEventListener("click", (e) => {
      const el = e.target.parentNode;
      el.classList.toggle("closed");
      el.classList.toggle("open");
    });
  });
  */

  /*
  const timerMs = 10000;
  const header = document.querySelector("#header");
  let lineIndex = 2;
  let invert = false;
  const interval = setInterval(() => {
    header.style.backgroundImage = `url('${window.location.href}img/line-${lineIndex}.svg')`;
    lineIndex = invert ? lineIndex - 1 : lineIndex + 1;
    if (lineIndex == 1) {
      invert = false;
    } else if (lineIndex == 5) {
      invert = true;
    }
  }, timerMs);
  */
});
