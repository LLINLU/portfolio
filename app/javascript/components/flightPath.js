const flightPath = () => {

  const path = {
    curviness:1.25,
    autoRotate:true,
    values:[
    {x:100, y:-20}, {x:300,y:10},
    {x:500, y:100}
    ]
  }



const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper_plane",1,{
    bezier: path,
    ease: Power1.easeInout
  })
);
}

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({

});
export { flightPath };
