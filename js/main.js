let section = document.querySelector(".Skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};


let year = new Date().getFullYear();
document.getElementById("Rights").innerHTML = `${year}© Amine Triki || All Rights Reserved`;
