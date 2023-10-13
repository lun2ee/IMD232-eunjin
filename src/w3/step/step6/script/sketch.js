let cv;
let mv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}

function draw() {
  background('salmon');
  strokeWeight(2);
  stroke('cornflowerblue');
  line(0, 0, cv.x, cv.y);

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(0, 0, mv.x, mv.y);

  //   마우스 백터에서 중앙 백터 뺴기
  mv.sub(cv);
  //   흰색 선을 원점에서 중앙점으로 이동하려면, translate 를 활용하여 (center x,y) 값을 입력해주기
  translate(cv.x, cv.y);
  //   mv 에다가 cv 를 빼버리면, 이때부터 mv 는 cornflowerblue 와 crimson 을
  //   이어주는 선에 해당하는 길이와 방향을 가진 Vector 가 된ㄷㅏ.
  //   위의 말을 화이트로 시각화 하자면?
  stroke('white');
  line(0, 0, mv.x, mv.y);
}
