var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "play";
var line; 

var divisionHeight=300;
var score =0;
var particle;
var turn = 0 ;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : " + score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle = null){
      particle.display();

        if(particle.body.position.y>760){
           if(particle.body.position.y<300){
               score = score+500;
               particle = null
               if(count>=5)gameState = "end";
               fill("blue");
               stroke("black"); 
               text("score :" +score,200,130,300,20);
            
               //mousePressed();

           }
        }
   }

   fill("blue");
   stroke("black"); 
   text("500",170,530,300,20);

   fill("blue");
   stroke("black"); 
   text("500",255,530,300,20);

   fill("blue");
   stroke("black"); 
   text("500",340,530,300,20);

   fill("blue");
   stroke("black"); 
   text("500",415,530,300,20);

   fill("blue");
   stroke("black"); 
   text("100",500,530,300,20);

   fill("blue");
   stroke("black"); 
   text("100",575,530,300,20);

   fill("blue");
   stroke("black"); 
   text("100",655,530,300,20);

   fill("blue");
   stroke("black"); 
   text("300",730,530,300,20);

   fill("blue");
   stroke("black"); 
   text("300",810,530,300,20);

   fill("blue");
   stroke("black"); 
   text("300",890,530,300,20);

   
   
}
function mousePressed(){
  if(gameState!== "end"){
    score++;
    particle = new Particle(mouseX,10,10,10);
  }
}

