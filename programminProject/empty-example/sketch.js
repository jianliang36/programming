var diam1=0;

function setup() {
  // put setup code here
    createCanvas(1900,1000);
    background("#fdfefe");
}

function draw() {
  // put drawing code here
    strokeWeight(5);
    fill("#fdfefe")
    stroke("#fdfefe")
    ellipse(mouseX-20,mouseY-20,20,20);
    
    fill("#f55807");
    stroke("#e74c3c");
    ellipse(random(1900),random(1000),10,10);
    console.log(diam1);
}

function mousePressed(){
    diam1=diam1+5;
}