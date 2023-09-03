const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('play');
        } else {
            entry.target.classList.remove('play')
        }
    }); 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

// if (history.scrollRestoration) {
//     history.scrollRestoration = 'manual';
// } else {
//     window.onbeforeunload = function () {
//         window.scrollTo(0, 0);
//     }
// }



// window.onload = () => {
//     const anchors = document.querySelectorAll('a');
//     const transition_el = document.querySelector('.transition');

//     setTimeout(() => {
//       transition_el.classList.remove('is-active');
//     }, 500);
  
//     for (let i = 0; i < anchors.length; i++) {
//       const anchor = anchors[i];
  
//       anchor.addEventListener('click', e => {
//         e.preventDefault();
//         let target = e.target.href;
  
//         console.log(transition_el);
  
//         transition_el.classList.add('is-active');
  
//         console.log(transition_el);
  
//         setInterval(() => {
//           window.location.href = target;
//         }, 500);
//       })
//     }
//   }