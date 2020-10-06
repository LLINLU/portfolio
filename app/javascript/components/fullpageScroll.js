const smoothScroll = (elm,duration) => {
  const target = document.getElementById(elm);
  const targetPosition = target.getBoundingClientRect().top;

  let startPosition = window.pageYOffset;
  console.log(startPosition);
  var distance = targetPosition - startPosition;

  var startTime = null;
  const animation = (currentTime) => {
    if(startTime === null )
    startTime = currentTime;
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration)
    requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};


const ease = (t,b,c,d) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t-2) - 1) + b;
};


const clickScroll = () => {
  const button = document.getElementsByClassName("button1");
  const button2 = document.getElementsByClassName("button2");
  const button3 = document.getElementsByClassName("button3");
  console.log(button);
//   button[0].addEventListener("click", () => {
//   event.preventDefault();
//   smoothScroll("about_me", 1000);
// });
//   button2[0].addEventListener("click", () => {
//   event.preventDefault();
//   smoothScroll("works", 1000);
// });
  button3[0].addEventListener("click", () => {
  event.preventDefault();
  smoothScroll("contact", 1000);
});
}

// const wheelScroll = () => {
//   const sections = document.querySelectorAll('section');
//   let index = 0;
//   window.addEventListener('wheel',(e) => {
//     const delta = e.wheelDelta;
//     console.log(delta)
//     if (delta < 0) {
//         index++;
//         sections.forEach(section,i) => {
//           if (i === index) {
//             section.scrollIntoView({behavior: 'smooth'});
//           }
//         }

//     }
//   });
// }

export { clickScroll};
