var canvas;
var music;
var box1,box2,box2,box3,box4,box5


function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

     box1 = createSprite(184,146,40,40)
     box2 = createSprite(78,336,60,40)
     box3  = createSprite(302,336,60,40)
     box4 = createSprite(180,336,60,40)
    

     box1.shapeColor = "green"
     box2.shapeColor = "red"
     box3.shapeColor = "blue"
     box4.shapeColor = "pink"
     

    box1.velocityY = 7

    

    }

function draw() {
    background(rgb(169,169,169)); 
    drawSprites()

   box1.bounceOff(box2)
   box1.bounceOff(box3)
   box1.bounceOff(box4)
   

   
   
}  










