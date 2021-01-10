
const morphBlobs = () => {
// var tween1 = KUTE.to('#blob1', { path: '#blob2' }).start();
let tween = KUTE.fromTo('#blob3', {path: '#blob3' }, { path: '#blob2' }, // to shape
   { // options
      easing: 'easingCubicInOut',
      yoyo: true, repeat: 1100, duration: 2500 }).start();
console.log(tween)
// or same path into a square
// var tween2 = KUTE.to('#blob1', { path: '#blob3' }).start();
let tween2 = KUTE.fromTo('#blob3', {path: '#blob3' }, { path: '#blob1' }, // to shape
   { // options
      easing: 'easingCubicInOut',
      yoyo: true, repeat: 1100, duration: 3500 }).start();

let tween3 = KUTE.fromTo('#blob4', {path: '#blob4' }, { path: '#blob5' }, // to shape
   { // options
      easing: 'easingCubicInOut',
      yoyo: true, repeat: 1100, duration: 3500 }).start();
}


export { morphBlobs};
