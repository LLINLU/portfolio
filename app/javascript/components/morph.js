
const morphBlobs = () => {
// var tween1 = KUTE.to('#blob1', { path: '#blob2' }).start();
let tween = KUTE.fromTo('#blob3', {path: '#blob3' }, { path: '#blob2' }, // to shape
   { // options
      easing: 'easingCubicInOut',
      yoyo: true, repeat: 100, duration: 2500}).start();
console.log(tween)
// or same path into a square
// var tween2 = KUTE.to('#blob1', { path: '#blob3' }).start();

console.log('morph')


}
export { morphBlobs};
