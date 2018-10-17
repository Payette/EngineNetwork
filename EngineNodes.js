let numBubbles = 5;
let nameArray = ["Building Science", "Visualization", "Fabrication", "Computation", "Data Analytics"];
let smallNode = [
  {name:"Research + Tools", link:0},
  {name:"Simulation", link:0},
  {name:"VR + AR", link:1},
  {name:"Rendering", link:1},
  {name:"Animation", link:1},
  {name:"CNC Machining", link:2},
  {name:"3D Printing", link:2},
  {name:"Laser Cutting", link:2},
  {name:"Parametric Design", link:3},
  {name:"Scripting", link:3},
  {name:"Interactive Graphics", link:4}
];

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

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1025,641);

  for (let xDots = 0; xDots < 60; xDots++){
    for (let yDots = 0; yDots < 40; yDots++){
      BGBubblesX.push(random(0,6));
      BGBubbleSpeed.push(random(-.04,.04));
    }
  }

  for (let i=0; i<numBubbles; i++){
    if (i%2 == 0){
      let x = random(width*(1/7), width*(4/7));
      BubbleX.push(x);
    }else{
    let x = random(width*(3/7), width*(6/7));
    BubbleX.push(x);
  }
  }
  for (let i=0; i<numBubbles; i++){
    if(i%2 == 1){
      let y = random(height*(1/6), height*(3/6));
      BubbleY.push(y);
    }else{
      let y = random(height*(3/6), height*(5/6));
      BubbleY.push(y);
    }
  }
  for (let i=0; i<numBubbles; i++){
    BubbleMoveX.push(random(-.5,.5));
    BubbleMoveY.push(random(-.5,.5));
    let dia = int(random(30,70));
    BubbleDiameter.push(dia);
  }
}

function draw() {
  background(255);
  push();
  strokeWeight(1);
  stroke(60);
  rect(1,1,width-4,height-4);
  pop();


  let xWin = int(width/64);
  let yWin = int(height/64);

  for (let xDots = 0; xDots < xWin; xDots++){
    for (let yDots = 0; yDots < yWin; yDots++){
      push();

        stroke(220);
        strokeWeight(1);
        //ellipse(xDots*64 + 33, yDots*64 + 33, 64,64);
        stroke(150);
        strokeWeight(2);

      BGBubblesX[(xDots*(int(xWin)))+yDots] = BGBubblesX[(xDots*(int(xWin)))+yDots] + BGBubbleSpeed[(xDots*(int(xWin)))+yDots];
      //point(xDots*64 + 33, yDots*64 + 33, 64,64);
      point(xDots*64+32 + 32*sin(BGBubblesX[(xDots*(int(xWin)))+yDots]), yDots*64+32 + 32*cos(BGBubblesX[(xDots*(int(xWin)))+yDots]));
      pop();
      BGNodeX[(xDots*(int(xWin)))+yDots] = int(xDots*64+32 + 32*sin(BGBubblesX[(xDots*(int(xWin)))+yDots]));
      BGNodeY[(xDots*(int(xWin)))+yDots] = int(yDots*64+32 + 32*cos(BGBubblesX[(xDots*(int(xWin)))+yDots]));
      push();
      stroke(230);
      strokeWeight(1);
        if (abs(BGNodeX[(xDots*(int(xWin)))+yDots]-BGNodeX[(xDots*(int(xWin)))+yDots+1]) < 40 && abs(BGNodeY[(xDots*(int(xWin)))+yDots]-BGNodeY[(xDots*(int(xWin)))+yDots+1]) < 40){
          line(BGNodeX[(xDots*(int(xWin)))+yDots],BGNodeY[(xDots*(int(xWin)))+yDots],BGNodeX[(xDots*(int(xWin)))+yDots+1],BGNodeY[(xDots*(int(xWin)))+yDots+1]);
        }
        if (abs(BGNodeX[(xDots*(int(xWin)))+yDots]-BGNodeX[(xDots*(int(xWin)))+yDots-1]) < 40 && abs(BGNodeY[(xDots*(int(xWin)))+yDots]-BGNodeY[(xDots*(int(xWin)))+yDots-1]) < 40){
          line(BGNodeX[(xDots*(int(xWin)))+yDots],BGNodeY[(xDots*(int(xWin)))+yDots],BGNodeX[(xDots*(int(xWin)))+yDots-1],BGNodeY[(xDots*(int(xWin)))+yDots-1]);
        }
        if (abs(BGNodeX[(xDots*(int(xWin)))+yDots]-BGNodeX[(xDots*(int(xWin)))+yDots+(int(xWin))]) < 40 && abs(BGNodeY[(xDots*(int(xWin)))+yDots]-BGNodeY[(xDots*(int(xWin)))+yDots+(int(xWin))]) < 40){
          line(BGNodeX[(xDots*(int(xWin)))+yDots],BGNodeY[(xDots*(int(xWin)))+yDots],BGNodeX[(xDots*(int(xWin)))+yDots+(int(xWin))],BGNodeY[(xDots*(int(xWin)))+yDots+(int(xWin))]);
        }
        if (abs(BGNodeX[(xDots*(int(xWin)))+yDots]-BGNodeX[(xDots*(int(xWin)))+yDots-(int(xWin))]) < 40 && abs(BGNodeY[(xDots*(int(xWin)))+yDots]-BGNodeY[(xDots*(int(xWin)))+yDots-(int(xWin))]) < 40){
          line(BGNodeX[(xDots*(int(xWin)))+yDots],BGNodeY[(xDots*(int(xWin)))+yDots],BGNodeX[(xDots*(int(xWin)))+yDots-(int(xWin))],BGNodeY[(xDots*(int(xWin)))+yDots-(int(xWin))]);
        }
        pop();
    }
  }


  strokeWeight(1);
  noFill();
  for(let i = 0; i< numBubbles; i++){
    let smallNodeArray = [];
    for (let item = 0; item < smallNode.length; item++){
      if (smallNode[item].link == i){
        smallNodeArray.push(smallNode[item].name)
      }
    }
    for (let SNArray = 0; SNArray < smallNodeArray.length; SNArray++){
      push();
      noStroke();
      fill(0);
      smallNodeX[SNArray] = BubbleOrbitX[i]+ smallDiameter*sin((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i);
      smallNodeY[SNArray] = BubbleOrbitY[i] + smallDiameter*cos((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i);
      ellipse(BubbleOrbitX[i]+ smallDiameter*sin((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i), BubbleOrbitY[i] + smallDiameter*cos((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i),3,3);
      stroke(200);
      line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[i]+smallDiameter*sin((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i), BubbleOrbitY[i] + smallDiameter*cos((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i))
      pop();
    }

    for(let j = 0; j< numBubbles; j++){
      if (i != j){ // DONT LET THE BUBBLES GET TOO CLOSE

        if(abs(BubbleX[i]-BubbleX[j]) < BubbleDiameter[i]+BubbleDiameter[j] && abs(BubbleY[i]-BubbleY[j]) < BubbleDiameter[i]+BubbleDiameter[j]){
          BubbleX[j] = BubbleX[j] - (BubbleX[i]-BubbleX[j])*.001;
          BubbleY[j] = BubbleY[j] - (BubbleY[i]-BubbleY[j])*.001;
      }

        strokeWeight(1);
        stroke(abs(BubbleX[i]-BubbleX[j])/(width/200)+100);

      line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[j],BubbleOrbitY[j]);
      //line(BubbleOrbitX[i],BubbleOrbitY[i],width/2,height/2);

      if (abs(mouseX - BubbleOrbitX[i]) < 25 && abs(mouseY - BubbleOrbitY[i]) < 25){
        push();
        stroke(255,100,130);
        strokeWeight(3);
        line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[j],BubbleOrbitY[j]);
        //line(BubbleOrbitX[i],BubbleOrbitY[i],width/2,height/2);
        pop();
      }
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


    if (abs(mouseX - BubbleOrbitX[i]) < 25 && abs(mouseY - BubbleOrbitY[i]) < 25){
        let smallNodeArray = [];
      for (let item = 0; item < smallNode.length; item++){
        if (smallNode[item].link == i){
          smallNodeArray.push(smallNode[item].name)
        }
      }
      for (let SNArray = 0; SNArray < smallNodeArray.length; SNArray++){
        push();
        noStroke();
        fill(110);
        textSize(9);
        text(smallNodeArray[SNArray], BubbleOrbitX[i]+ smallDiameter*sin((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i), BubbleOrbitY[i] + smallDiameter*cos((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i));
        pop();
      }
      if (mouseIsPressed){ // IF THE MOUSE IS WITHIN 25px OF THE NODE AND CLICKED, IT FOLLOWS THE MOUSE
          BubbleX[i] =BubbleX[i]+((mouseX-pmouseX));
          BubbleY[i] = BubbleY[i]+((mouseY-pmouseY));
        }
    }

    for (let BGnodes = 0; BGnodes < BGNodeX.length; BGnodes++){
        if (abs(BubbleOrbitX[i] - BGNodeX[BGnodes]) < 55 &&  abs(BubbleOrbitY[i] - BGNodeY[BGnodes]) < 55){
          stroke(200);
          line(BubbleOrbitX[i],BubbleOrbitY[i],BGNodeX[BGnodes],BGNodeY[BGnodes]);
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
  for(let i = 0; i< numBubbles; i++){
    stroke(0);
    push();
    fill('yellow');
    strokeWeight(1);
    ellipse(BubbleOrbitX[i], BubbleOrbitY[i],8,8); //DRAW A LINE BETWEEN ALL THE NODES
    pop();

  if (abs(mouseX - BubbleOrbitX[i]) < 25 && abs(mouseY - BubbleOrbitY[i]) < 25){
    push();
    noStroke();
    fill(0);
    textSize(12);
    text(nameArray[i],BubbleOrbitX[i], BubbleOrbitY[i]);
    pop();
  }
}
stroke(70);
strokeWeight(2);
fill(255);
//ellipse(width/2,height/2,10,10);
/*
if(abs(mouseX-width/2) < 10 && abs(mouseY-height/2) < 10){
  push();
        textSize(width/4);
        textAlign(CENTER);
        background(255,200);

        text("ENGINE",width/2, height/2+(height/8)); //IF MOUSE PRESSED OVER CENTER NODE - ADD WHITE OVERLAY AND SHOW 'ENGINE' TEXT
        pop();
}
*/
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
