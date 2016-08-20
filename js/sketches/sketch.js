//sketch.js

var x = 700;
var y = 400;
var b1 = new block(x,y,true);
var b2 = new block(x,y,false);

function setup() {
  var canvas = createCanvas(1400, 800);
  canvas.parent('sketch-holder');
  background(200);
}

function draw(){
	fill(255);
	b1.move();
	b2.move();


}

function block(startx,starty,random){
	this.random = random;
	this.x = startx;
	this.y = starty;
	this.move = function(){
		var one = Math.random();
		var two = Math.random();
		if(one > 0.5){
			this.x = this.x + 10;
		
		}else{
			this.x = this.x - 10;
		}
		if(two > 0.5){
			this.y = this.y + 10;
		}else{
			this.y = this.y - 10;
		}

		//Boundaries
		if(this.x > width){this.x = width;}
		if(this.x < 0){this.x = 0;}
		if(this.y > height){this.y = height;}
		if(this.y < 0){this.y = 0;}
		if(this.random == true){
			fill(Math.random()*255);
		}else{
			fill(Math.random()*255,Math.random()*255,Math.random()*255);
		}
		rect(this.x,this.y,10,10);

		}
}
