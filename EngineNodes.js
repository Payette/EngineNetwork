let numBubbles = 5;
let nameArray = ["Building Science", "Visualization", "Fabrication", "Computation", "Data Analytics"];

let BubbleDiameter = [];
let smallDiameter = 30;
let BubbleX = [];
let BubbleY = [];
let BubbleOrbitX = [];
let BubbleOrbitY = [];
let speed = .2;
let m = 4;

let BGBubblesX = [];
let BGBubbleSpeed = [];

let BGNodeX = [];
let BGNodeY = [];

let smallNodeX = [];
let smallNodeY = [];

let BubbleMoveX = [];
let BubbleMoveY = [];

let XSpacing = 1065/8;
let YSpacing = 650/4;

let infectionDiameter = [];
let infectionX = [XSpacing*3,XSpacing*0,XSpacing*4,XSpacing*8,XSpacing*1,XSpacing*3,XSpacing*5,XSpacing*7];
let infectionY = [YSpacing*1,YSpacing*1,YSpacing*1,YSpacing*1,YSpacing*3,YSpacing*3,YSpacing*3,YSpacing*3];
let infectionMoveX = [];
let infectionMoveY = [];
let infectionNum = 8;

let infectionArray = [[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]];

function setup() {
  if (windowWidth < 10){
    windowWidth = 1065;
    windowHeight = 650;
  }
  createCanvas(windowWidth, windowHeight);

  for (let xDots = 0; xDots < 60; xDots++){
    for (let yDots = 0; yDots < 40; yDots++){
      BGBubblesX.push(random(0,6));
      BGBubbleSpeed.push(random(-.02,.02));
    }
  }

  for (let i=0; i<numBubbles; i++){
    if (i%2 == 0){
      let x = random(width*(1/7), width*(3/7));
      BubbleX.push(x);
    }else{
    let x = random(width*(4/7), width*(6/7));
    BubbleX.push(x);
  }
  }
  for (let i=0; i<numBubbles; i++){
    if(i%3 == 1){
      let y = random(height*(1/6), height*(3/6));
      BubbleY.push(y);
    }else{
      let y = random(height*(3/6), height*(5/6));
      BubbleY.push(y);
    }
  }
  for (let i=0; i<numBubbles; i++){
    let myX = random(-.1,.1);
    if (abs(myX)<.05){
      myX = myX*2
    }
    let myY = random(-.1,.1);
    if (abs(myY)<.05){
      myY = myY*2
    }
    BubbleMoveX.push(random(myX));
    BubbleMoveY.push(random(myY));
    let dia = int(random(30,70));
    BubbleDiameter.push(dia);
  }


  for (let i=0; i<infectionNum; i++){
    let myX = random(-.1,.1);
    if (abs(myX)<.1){
      myX = myX*2
    }
    let myY = random(-.1,.1);
    if (abs(myY)<.1){
      myY = myY*5
    }
    infectionMoveX.push(random(myX));
    infectionMoveY.push(random(myY));
    let dia = int(random(330,590));
    infectionDiameter.push(dia);
  }
}

function draw() {
  background(205);


  for (let i=0; i<infectionNum; i++){
  
      push();
      stroke(220);
      strokeWeight(3);
      let i1X = infectionX[i]+infectionDiameter[i]/2*sin(.001*frameCount+208*(2.2/i));
      infectionArray[i][0][0] = i1X
      let i1Y = infectionY[i]+infectionDiameter[i]/2*cos(.001*frameCount+208*(2.2/i));
      infectionArray[i][0][1] = i1Y
      let i2X = infectionX[i]+infectionDiameter[i]/2*sin(-.0007*frameCount+408*(2.2/i));
      infectionArray[i][1][0] = i2X
      let i2Y = infectionY[i]+infectionDiameter[i]/2*cos(-.0007*frameCount+408*(2.2/i));
      infectionArray[i][1][1] = i2Y
      let i3X = infectionX[i]+infectionDiameter[i]/2*sin(-.0016*frameCount*(2.2/i));
      infectionArray[i][2][0] = i3X
      let i3Y = infectionY[i]+infectionDiameter[i]/2*cos(-.0016*frameCount*(2.2/i));
      infectionArray[i][2][1] = i3Y
      let i4X = infectionX[i]+infectionDiameter[i]/2*sin(.0013*frameCount+1132*(2.2/i));
      infectionArray[i][3][0] = i4X
      let i4Y = infectionY[i]+infectionDiameter[i]/2*cos(.0013*frameCount+1132*(2.2/i));
      infectionArray[i][3][1] = i4Y
      let i5X = infectionX[i]+infectionDiameter[i]/2*sin(-.0011*frameCount+55*(2.2/i));
      infectionArray[i][4][0] = i5X
      let i5Y = infectionY[i]+infectionDiameter[i]/2*cos(-.0011*frameCount+55*(2.2/i));
      infectionArray[i][4][1] = i5Y
      let i6X = infectionX[i]+infectionDiameter[i]/2*sin(-.0001*frameCount+1320*(1/i));
      infectionArray[i][5][0] = i6X
      let i6Y = infectionY[i]+infectionDiameter[i]/2*cos(-.0001*frameCount+1320*(1/i));
      infectionArray[i][5][1] = i6Y
      strokeWeight(3);

      line(i1X,i1Y,i2X,i2Y);
      line(i1X,i1Y,i3X,i3Y);
      line(i1X,i1Y,i4X,i4Y);
      line(i1X,i1Y,i5X,i5Y);
      line(i1X,i1Y,i6X,i6Y);

      line(i2X,i2Y,i3X,i3Y);
      line(i2X,i2Y,i4X,i4Y);
      line(i2X,i2Y,i5X,i5Y);
      line(i2X,i2Y,i6X,i6Y);

      line(i3X,i3Y,i4X,i4Y);
      line(i3X,i3Y,i5X,i5Y);
      line(i3X,i3Y,i6X,i6Y);

      line(i4X,i4Y,i5X,i5Y);
      line(i4X,i4Y,i6X,i6Y);

      line(i5X,i5Y,i6X,i6Y);
      pop();
  }



  let xWin = int(width/64);
  let yWin = int(height/64);

  for (let xDots = 0; xDots < xWin; xDots++){
    for (let yDots = 0; yDots < yWin; yDots++){
      push();

        stroke(255);
        strokeWeight(1);
        stroke(250);
        strokeWeight(3);

      BGBubblesX[(xDots*(int(xWin)))+yDots] = BGBubblesX[(xDots*(int(xWin)))+yDots] + BGBubbleSpeed[(xDots*(int(xWin)))+yDots];

      pop();
      BGNodeX[(xDots*(int(xWin)))+yDots] = int(xDots*64+32 + 32*sin(BGBubblesX[(xDots*(int(xWin)))+yDots]));
      BGNodeY[(xDots*(int(xWin)))+yDots] = int(yDots*64+32 + 32*cos(BGBubblesX[(xDots*(int(xWin)))+yDots]));
      push();
    //  stroke('yellow');
      strokeWeight(3);

        pop();
    }
  }


  strokeWeight(3);
  noFill();
  for(let i = 0; i< numBubbles; i++){


    for(let j = 0; j< numBubbles; j++){
      if (i != j){ // DONT LET THE BUBBLES GET TOO CLOSE

        if(abs(BubbleX[i]-BubbleX[j]) < BubbleDiameter[i]+BubbleDiameter[j] && abs(BubbleY[i]-BubbleY[j]) < BubbleDiameter[i]+BubbleDiameter[j]){
          BubbleX[j] = BubbleX[j] - (BubbleX[i]-BubbleX[j])*.001;
          BubbleY[j] = BubbleY[j] - (BubbleY[i]-BubbleY[j])*.001;
      }

        strokeWeight(3);
        stroke(abs(BubbleX[i]-BubbleX[j])/(width/200)+100);

      line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[j],BubbleOrbitY[j]);

     }
    }
      BubbleOrbitX[i] = BubbleX[i]
      BubbleOrbitY[i] = BubbleY[i]


      push();
      noStroke();
      let myAlpha = 10;
      fill(202,31,123,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[2],BubbleOrbitY[2]);
      fill(164,1,88,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[3],BubbleOrbitY[3]);
      fill(126,0,68,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[3],BubbleOrbitY[3],BubbleOrbitX[4],BubbleOrbitY[4]);

      fill(240,73,163,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[4],BubbleOrbitY[4]);
      fill(255,116,191,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[3],BubbleOrbitY[3]);
      fill(255,154,208,myAlpha);
      triangle(BubbleOrbitX[0],BubbleOrbitY[0],BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[4],BubbleOrbitY[4]);

      fill(202,31,66,myAlpha);
      triangle(BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[3],BubbleOrbitY[3]);
      fill(202,31,152,myAlpha);
      triangle(BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[4],BubbleOrbitY[4]);
      fill(202,31,180,myAlpha);
      triangle(BubbleOrbitX[1],BubbleOrbitY[1],BubbleOrbitX[3],BubbleOrbitY[3],BubbleOrbitX[4],BubbleOrbitY[4]);

      fill(87,0,47,myAlpha);
      triangle(BubbleOrbitX[2],BubbleOrbitY[2],BubbleOrbitX[3],BubbleOrbitY[3],BubbleOrbitX[4],BubbleOrbitY[4]);

      pop();


      for(let floaties = 0; floaties < infectionArray.length; floaties++){
    for (let BGnodes = 0; BGnodes < infectionArray[0].length; BGnodes++){
        if (abs(BubbleOrbitX[i] - infectionArray[floaties][BGnodes][0]) < 100 &&  abs(BubbleOrbitY[i] - infectionArray[floaties][BGnodes][1]) < 100){
          stroke('yellow');
          line(BubbleOrbitX[i],BubbleOrbitY[i],infectionArray[floaties][BGnodes][0],infectionArray[floaties][BGnodes][1]);
      }
    }
    if (BubbleX[i] < 0 + BubbleDiameter[i]){
      BubbleX[i] = BubbleX[i]+1;
      BubbleMoveX[i] = BubbleMoveX[i]*-1
    }else if (BubbleX[i] > width - BubbleDiameter[i]){
      BubbleX[i] = BubbleX[i]-1;
      BubbleMoveX[i] = BubbleMoveX[i]*-1
    }
    if (BubbleY[i] < 0 + BubbleDiameter[i]){
      BubbleY[i] = BubbleY[i]+1;
      BubbleMoveY[i] = BubbleMoveY[i]*-1
    }else if (BubbleY[i] > height - BubbleDiameter[i]){
      BubbleY[i] = BubbleY[i]-1;
      BubbleMoveY[i] = BubbleMoveY[i]*-1
    }
      BubbleX[i] = BubbleX[i] + BubbleMoveX[i]
      BubbleY[i] = BubbleY[i] + BubbleMoveY[i]
  }
}
  for(let i = 0; i< numBubbles; i++){
    stroke(0);
    push();
    fill(90);
    noStroke();
    ellipse(BubbleOrbitX[i], BubbleOrbitY[i],18,18); //DRAW A LINE BETWEEN ALL THE NODES
    pop();

  if (abs(mouseX - BubbleOrbitX[i]) < 25 && abs(mouseY - BubbleOrbitY[i]) < 25){
    push();
    noStroke();
    fill(60);
    textSize(22);
    text(nameArray[i],BubbleOrbitX[i]+12, BubbleOrbitY[i]+5);
    pop();
  }
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
