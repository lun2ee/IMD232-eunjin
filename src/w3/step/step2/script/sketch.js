function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('orange');
}

function draw() {
  background('orange');
  fill(0);
  //   0 은 black
  //   if (mouseX > width / 2) {
  //     rect(width / 2, 0, width / 2, height);
  //     // 오른쪽에 마우스대면 black 으로 변함
  //     // 오른쪽에 있을때 메시지가 뜬다.
  //   } else {
  //     rect(0, 0, width / 2, height);
  //   }
  if (mouseX > width / 2) {
    if (mouseX > height / 2) {
      rect(width / 2, height / 2, width / 2, height / 2);
      // A
    } else {
      rect(width / 2, 0, width / 2, height / 2);
      // B
    }
  } else {
    rect(0, 0, width / 2, height);
  }
}
