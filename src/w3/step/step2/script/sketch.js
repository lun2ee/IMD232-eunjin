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

  // if (mouseX > width / 2) {
  //   if (mouseY > height / 2) {
  //     rect(width / 2, height / 2, width / 2, height / 2);
  //     // A
  //   } else {
  //     rect(width / 2, 0, width / 2, height / 2);
  //     // B
  //   }
  // } else {
  //   if (mouseY > height / 2) {
  //     rect(0, height / 2, width / 2, height / 2);
  //   } else {
  //     rect(0, 0, width / 2, height / 2);
  //   }
  //   // 사사분면을 오가면서 색이 칠해지는 것을 볼  수 있다.
  // }

  // if (mouseX > width / 3) {
  //   // 1/3의 상황을 이야기 한 것
  //   if (mouseY > height / 2) {
  //     rect(width / 3, height / 2, width / 2, height / 2);
  //   } else {
  //     rect(width / 3, 0, width / 3, height / 2);
  //   }
  // } else if (mouseX > (2 * width) / 3) {
  //   // 2/3의 상황을 이야기 한것
  //   if (mouseY > height / 2) {
  //     rect((2 * width) / 3, height / 2, width / 2, height / 2);
  //   } else {
  //     rect((2 * width) / 3, 0, width / 3, height / 2);
  //   }
  //   // 건너뛰게 되어버렸다.
  // } else {
  //   if (mouseY > height / 2) {
  //     rect(0, height / 2, width / 3, height / 2);
  //   } else {
  //     rect(0, 0, width / 3, height / 2);
  //   }
  // }

  // if (mouseX > width / 3) {
  //   if (mouseX > (2 * width) / 3) {
  //     if (mouseY > height / 2) {
  //       rect((2 * width) / 3, height / 2, width / 2, height / 2);
  //     } else {
  //       rect((2 * width) / 3, 0, width / 3, height / 2);
  //     }
  //   } else if (mouseY > height / 2) {
  //     rect(width / 3, height / 2, width / 2, height / 2);
  //   } else {
  //     rect(width / 3, 0, width / 3, height / 2);
  //   }
  // } else {
  //   if (mouseY > height / 2) {
  //     rect(0, height / 2, width / 3, height / 2);
  //   } else {
  //     rect(0, 0, width / 3, height / 2);
  //   }
  // }
  // (깔끔한 버전)
  // if(2/3보다 큼?){

  // }else if (1/3보다 큼?){ //일단 2/3보다는 작은데, 1/3보다는 큼?

  // }else { //일단, 2/3보다는 작은데, 1/3보다도 작음.

  // }

  if (mouseX > (2 / 3) * width) {
    if (mouseY > height / 2) {
      rect((2 / 3) * width, height / 2, width);
    } else {
      rect(width / 3, height / 2);
    }
  } else if (mouseX > (1 / 3) * width) {
    //일단 2/3보다는 작은데, 1/3보다는 큼?
  } else {
    //일단, 2/3보다는 작은데, 1/3보다도 작음.
  }
}
