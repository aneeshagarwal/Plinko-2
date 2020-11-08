var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var turn =0;  
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var gameState = "start";
var count = 0;
var score =0;
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
  text("Score : "+score,20,30);
  textSize(20);
  text("500",20,570);
  text("500",100,570);
  text("500",180,570);
  text("500",260,570);
  text("100",340,570);
  text("100",420,570);
  text("100",500,570);
  text("200",580,570);
  text("200",660,570);
  text("200",740,570);
  Engine.update(engine);

  if(gameState === "end"){
    textSize(80);
    text("GameOver",235,240);
  }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   //if (Input.GetKey(KeyCode.Mouse0)){
    // if(count <= 5){
    //  mousePressed();
     //} 
   
   
     if(particle!=null){
      particle.display();

      if(particle.body.position.y>760){

        if(particle.body.position.x < 300 && particle.body.position.x > 0){
          score=score+500;
          particle=null;
          if(count >= 5) gameState ="end";
        }
      }
    }

    if(particle!=null){
      particle.display();

      if(particle.body.position.y>760){

        if(particle.body.position.x > 301 && particle.body.position.x < 600){
          score=score+100;
          particle=null;
          if(count >= 5) gameState ="end";
        }
      }
    }

    if(particle!=null){
      particle.display();

      if(particle.body.position.y>760){

        if(particle.body.position.x > 601 && particle.body.position.x < 900){
          score=score+200;
          particle=null;
          if(count >= 5) gameState ="end";
        }
      }
    }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
   particle = new Particle(mouseX, 10, 10, 10); 
  }
}