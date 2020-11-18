
const landingAnim = () => {
  const hero = document.querySelector(".girl_img");
  const text = document.querySelector('.about');
  const nav =document.querySelectorAll('.nav-link');
  if(hero){
  const tl = new  TimelineMax();
  tl.fromTo(
    hero,
    1,
    {height: "0%"},
    {height: "100%", ease: Power2.easeInOut}
  )

  .fromTo(
    hero,
    5.2,
    {width: '0px'},
    {width: '660px', ease: Power2.easeInOut },
    "-=1.2"
  )

  .fromTo(text, 4.5, {opacity: 0, x: 30}, {opacity: 1, x: 0},
  "-=0.5"
  )
    .fromTo(
     nav,
     1,
     {height: "0%", opacity: 0},
     {height: "100%", ease: Power2.easeInOut, opacity:1},
     "-=3.5"
  );
}}

export { landingAnim }
