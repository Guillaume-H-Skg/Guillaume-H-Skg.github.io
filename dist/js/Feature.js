let targetScroll = document.getElementById("targetScroll");
let targetBg = document.getElementById("Footer");
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");

let rootElement = document.documentElement;

function callbackBackToTop(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      scrollToTopBtn.classList.add("showBtn");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function callbackChangeBackground(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      scrollToTopBtn.classList.remove("changeBg");
    } else {
      scrollToTopBtn.classList.add("changeBg");
    }
  });
}
  
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
let observerBtT = new IntersectionObserver(callbackBackToTop);
observerBtT.observe(targetScroll);
let observerBg = new IntersectionObserver(callbackChangeBackground);
observerBg.observe(targetBg);