var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;}; /* Live coding tutorial on Coding Train with Sarah Drasner: https://www.youtube.com/watch?v=yRxWa8lXasI&t=0s&index=5&list=PLRqwX-V7Uu6bYBG4PsCJpsvMka3boE9pR*/
var burst = new mojs.Burst({
  left: 0, top: 0,
  radius: { 0: 100 },
  count: 20,
  isShowEnd: false,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: { 6: 0 },
    angle: { 360: 0 },
    radius: { 30: 5 },
    duration: 3000,
    isForce3d: true } });



var burst2 = new mojs.Burst({
  left: 0, top: 0,
  radius: { 0: 200 },
  count: 12,
  isShowEnd: false,
  children: {
    shape: 'zigzag',
    points: 7,
    stroke: 'pink',
    fill: 'none',
    strokeWidth: { 6: 0 },
    angle: { '-360': 0 },
    radius: { 30: 5 },
    opacity: { 1: 0 },
    duration: 3000,
    isForce3d: true } });



var burst3 = new mojs.Burst({
  left: 0, top: 0,
  radius: { 0: 200 },
  count: 5,
  isShowEnd: false,
  children: {
    fill: 'purple',
    points: 7,
    angle: { '-360': 0 },
    radius: { 10: 5 },
    opacity: { 1: 0 },
    duration: 3000,
    isForce3d: true } });



var circ_opt = {
  left: 0, top: 0,
  radius: { 0: 200 },
  fill: 'none',
  stroke: 'yellow',
  opacity: { 1: 0 },
  duration: 3500,
  isForce3d: true,
  isShowEnd: false };


var circ = new mojs.Shape(_extends({},
circ_opt));


var circ2 = new mojs.Shape(_extends({},
circ_opt, {
  delay: 500 }));


var timeline = new mojs.Timeline();
timeline.
add(burst, burst2, burst3, circ, circ2);

document.addEventListener('click', function (e) {
  var x = e.pageX,
  y = e.pageY;

  var coords = { x: x, y: y };
  burst.tune(coords);burst2.tune(coords);burst3.tune(coords);
  circ.tune(coords);circ2.tune(coords);
  timeline.replay();
});