
const landingAnim = () => {
  const hero = document.querySelector(".girl_img");
  const text = document.querySelector('.about')
  const tl = new  TimelineMax();
  tl.fromTo(
    hero,
    1,
    {height: "0%"},
    {height: "100%", ease: Power2.easeInOut}
  )
  .fromTo(
    hero,
    1.2,
    {width: '95%'},
    {width: '100%', ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(text, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0},
  "-=0.5"
  );
}

export { landingAnim }
