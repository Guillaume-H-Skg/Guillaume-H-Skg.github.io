let targetScroll = document.getElementById("targetScroll");
let targetBg = document.getElementById("Footer");
let targetTl = document.querySelector(".bgTimeline");

let scrollToTopBtn = document.querySelector(".scrollToTopBtn");

let bgTimeline = document.querySelector(".SectionTimeline");


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

function callbackChangeTlBackground(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      bgTimeline.classList.remove("changeTlBg");
    } else {
      bgTimeline.classList.add("changeTlBg");
    }
  });
}

// const observerBgTl = new IntersectionObserver((entries)=> {
//   entries.forEach((entry) =>{
//       if (entry.isIntersecting) {
//           entry.target.classList.add('changeTlBg');
//       } else {
//           entry.target.classList.remove('changeTlBg');
//       }
//   }); 
// });

scrollToTopBtn.addEventListener("click", scrollToTop);
    
let observerBtT = new IntersectionObserver(callbackBackToTop);
observerBtT.observe(targetScroll);
let observerBg = new IntersectionObserver(callbackChangeBackground);
observerBg.observe(targetBg);




let observerBgTl2 = new IntersectionObserver(callbackChangeTlBackground);
// observerBgTl2.observe(targetTl);

const hiddenElements2 = document.querySelectorAll('.bgTimeline');
console.log(hiddenElements2)
hiddenElements2.forEach((el)=> observerBgTl2.observe(el));