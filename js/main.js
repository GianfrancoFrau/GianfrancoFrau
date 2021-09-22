window.addEventListener("load", function () {
  const sections = document.querySelectorAll(".section");
  const togglers = document.querySelectorAll(".section > h3");

  function closeAll() {
    sections.forEach((s) => {
      s.classList.add("closed");
    });
  }

  function toggle(el) {
    el.classList.toggle("closed");
    // if (el.classList.contains("closed")) {
    //   el.classList.remove("closed");
    // } else {
    //   el.classList.add("closed");
    // }
  }

  //---------

  Array.from(togglers).map((h3) => {
    h3.addEventListener("click", (e) => {
      toggle(e.target.parentNode);
    });
  });


});
