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
  strokeWeight(2);
  stroke('white');
  line(0, 0, cv.x, cv.y);

  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  line(0, 0, mv.x, mv.y);

  //   mv 에서 cv 를 뺀 값을 넣고 싶으면,
  //   mv값 자체를 바꿔버리기
  cvToMv = p5.Vector.sub(mv, cv);
  stroke('lime');
  //   lime stroke 를 중앙선으로 옮기기
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);

  cvToMv.mult(0.5);
  //   cvToMv stroke 를 딱 절반만 black 4 로 칠해주기
  //   mult 라는 내장되어있는 함수를 이용해서, 백터의 길이를 절반으로 줄이기
  stroke('black');
  strokeWeight(4);
  line(0, 0, cvToMv.x, cvToMv.y);
}
