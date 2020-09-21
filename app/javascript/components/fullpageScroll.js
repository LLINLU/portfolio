const smoothScroll = (elm,duration) => {
  const target = document.getElementsByClassName(elm);
  const targetPosition = target[0].getBoundingClientRect().top;

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
  const button = document.getElementsByClassName("button");
  console.log(button);
  button[0].addEventListener("click", () => {
  smoothScroll("second", 1000);
});
}

export { clickScroll };
