const smoothScroll = (eventTarget,duration) => {
  const target = document.getElementsByClassName(eventTarget);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYoffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  function animation(currentTime) {
    if(startTime === null )
    startTime = currentTime;
    let timeElapsed = currentTime - startTime
    let run = ease(timeElapsed, startPosition, distance, duration);
  }

  function ease(t,b,c,d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}



const clickScroll = () => {
  const button = document.getElementsByClassName(".button");
  button.addEventListener("click", () => {
  smoothScroll(".second", 1000);
});
}

export { smoothScroll, clickScroll };
