function setup() {
  // p5Util 에서 가지고 온 함수
  setCanvasContainer('canvas-goes-here', 3, 2, true);
  //   true 를 작성하게 되면 화면 비율에 맞춰서 확대 축소가 된다.
  //   400:300 비율을 유지하면서 flexable 하게 작동을 하게 된다
  background('#ff7733');
}

function draw() {
  background('#ff7733');
  circle(mouseX, mouseY, width * 0.1);
}
