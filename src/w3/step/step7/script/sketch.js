// magnitude _ 등급 _
let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}
function draw() {
  background('slateblue');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();
  console.log(mag);
  //   mag 를 알아보려면 console.log 를 찍어 보셈
  noStroke();
  fill('white');
  rect(10, 10, mag, 10);
  //   10,10 위치해 있는 너비는 mag, 높이를 10으로
  //   mag 는 음수, 양수 개념이 없이 다 양수로 나온다.

  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
