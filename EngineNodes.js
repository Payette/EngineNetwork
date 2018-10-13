let numBubbles = 5;
let nameArray = ["Building Science", "Visualization", "Fabrication", "Computation", "Data Analytics"];
let smallNode = [
  {name:"Research + Tools", link:0},
  {name:"Simulation", link:0},
  {name:"2030 Challenge", link:0},
  {name:"VR + AR", link:1},
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
  createCanvas(1025,641);

  for (let xDots = 0; xDots < 16; xDots++){
    for (let yDots = 0; yDots < 10; yDots++){
      BGBubblesX.push(random(0,6));
      BGBubbleSpeed.push(random(-.05,.05));
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
    BubbleMoveX.push(random(-1,1));
    BubbleMoveY.push(random(-1,1));
    let dia = int(random(30,70));
    BubbleDiameter.push(dia);
  }
}


function draw() {
  background(255);

  for (let xDots = 0; xDots < 16; xDots++){
    for (let yDots = 0; yDots < 10; yDots++){
      push();

        stroke(240);
        strokeWeight(1);
        //ellipse(xDots*64 + 33, yDots*64 + 33, 64,64);
        stroke(2);
        strokeWeight(2);

      BGBubblesX[(xDots*10)+yDots] = BGBubblesX[(xDots*10)+yDots] + BGBubbleSpeed[(xDots*10)+yDots];
      point(xDots*64+32 + 32*sin(BGBubblesX[(xDots*10)+yDots]), yDots*64+32 + 32*cos(BGBubblesX[(xDots*10)+yDots]));
      pop();
      BGNodeX[(xDots*10)+yDots] = xDots*64+32 + 32*sin(BGBubblesX[(xDots*10)+yDots]);
      BGNodeY[(xDots*10)+yDots] = yDots*64+32 + 32*cos(BGBubblesX[(xDots*10)+yDots]);
    }
  }

  for (let BGNodesi = 0; BGNodesi < 160; BGNodesi++){
    //ellipse(BGNodeX[BGNodesi],BGNodeY[BGNodesi],10,10);
    for (let BGNodesj = 0; BGNodesj < BGNodeX.length; BGNodesj++){


      if (abs(BGNodeX[BGNodesi]-BGNodeX[BGNodesj]) < 50 && abs(BGNodeY[BGNodesi]-BGNodeY[BGNodesj]) < 50){
        push();
        stroke(230);
        strokeWeight(1);
        line(BGNodeX[BGNodesi],BGNodeY[BGNodesi],BGNodeX[BGNodesj],BGNodeY[BGNodesj]);
      }
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
      ellipse(BubbleOrbitX[i]+ smallDiameter*sin((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i), BubbleOrbitY[i] + smallDiameter*cos((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i),5,5);
      stroke(200);
      line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[i]+smallDiameter*sin((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i), BubbleOrbitY[i] + smallDiameter*cos((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i))
      pop();
    }

    for(let j = 0; j< numBubbles; j++){
      if (i != j){ // DONT LET THE BUBBLES GET TOO CLOSE

        if(abs(BubbleX[i]-BubbleX[j]) < BubbleDiameter[i]+BubbleDiameter[j] && abs(BubbleY[i]-BubbleY[j]) < BubbleDiameter[i]+BubbleDiameter[j]){
          BubbleX[j] = BubbleX[j] - (BubbleX[i]-BubbleX[j])*.005;
          BubbleY[j] = BubbleY[j] - (BubbleY[i]-BubbleY[j])*.005;
      }
      stroke(200);
      if(abs(mouseX-width/2) < 10 && abs(mouseY-height/2) < 10){
        noStroke();
      }else{
        strokeWeight(1);
      }
      //ellipse(BubbleX[i],BubbleY[i],BubbleDiameter[i]*2,BubbleDiameter[i]*2);
      stroke(255,100,130,150);
      line(BubbleOrbitX[i],BubbleOrbitY[i],BubbleOrbitX[j],BubbleOrbitY[j]);
     }
    }

      BubbleOrbitX[i] = BubbleX[i]
      BubbleOrbitY[i] = BubbleY[i]

    if (abs(mouseX - BubbleOrbitX[i]) < 25 && abs(mouseY - BubbleOrbitY[i]) < 25){
      push();
      noStroke();
      fill(0);
      textSize(12);
      text(nameArray[i],BubbleOrbitX[i], BubbleOrbitY[i]);
      pop();
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
        textSize(8);
        text(smallNodeArray[SNArray], BubbleOrbitX[i]+ smallDiameter*sin((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i), BubbleOrbitY[i] + smallDiameter*cos((-frameCount/smallDiameter/m)+smallDiameter/m+(SNArray*4)+i));
        pop();
      }
      if (mouseIsPressed){ // IF THE MOUSE IS WITHIN 25px OF THE NODE AND CLICKED, IT FOLLOWS THE MOUSE
          BubbleX[i] =BubbleX[i]+((mouseX-pmouseX));
          BubbleY[i] = BubbleY[i]+((mouseY-pmouseY));
        }
    }

    stroke(100);
    ellipse(BubbleOrbitX[i], BubbleOrbitY[i],10,10); //DRAW A LINE BETWEEN ALL THE NODES

    for (let BGnodes = 0; BGnodes < 160; BGnodes++){
        if (abs(BubbleOrbitX[i] - BGNodeX[BGnodes]) < 55 &&  abs(BubbleOrbitY[i] - BGNodeY[BGnodes]) < 55){
          stroke(200);
          line(BubbleOrbitX[i],BubbleOrbitY[i],BGNodeX[BGnodes],BGNodeY[BGnodes]);
      }
    }

    if (BubbleX[i] < 0 + BubbleDiameter[i]*2){
      BubbleX[i] = BubbleX[i]+1;
      BubbleMoveX[i] = BubbleMoveX[i]*-1
    }else if (BubbleX[i] > width - BubbleDiameter[i]*2){
      BubbleX[i] = BubbleX[i]-1;
      BubbleMoveX[i] = BubbleMoveX[i]*-1
    }
    if (BubbleY[i] < 0 + BubbleDiameter[i]*2){
      BubbleY[i] = BubbleY[i]+1;
      BubbleMoveY[i] = BubbleMoveY[i]*-1
    }else if (BubbleY[i] > height - BubbleDiameter[i]*2){
      BubbleY[i] = BubbleY[i]-1;
      BubbleMoveY[i] = BubbleMoveY[i]*-1
    }
      BubbleX[i] = BubbleX[i] + BubbleMoveX[i]
      BubbleY[i] = BubbleY[i] + BubbleMoveY[i]
  }
}
