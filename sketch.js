
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var balls = [];
 
var ground;
var gSlider;


 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    
   ground = new Ground(200,355,400,10);


   obstacle1 = new Obstacle(155,190,10,60);
   obstacle2 = new Obstacle(200,220,100,10);
   obstacle3 = new Obstacle(245,190,10,60);
    
    /*
    ground = Bodies.rectangle(200,360,400,10,{isStatic:true});

    World.add(world,ground);
    */
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        balls.push(new Ball(mouseX,mouseY,random(5,20)));
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for(var i = 0; i < balls.length; i++)
    {
        balls[i].display();
    }


    
    ground.display();
    obstacle1.display();
    obstacle2.display();
    obstacle3.display();
}


/*
// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {

    }
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
    }
}


*/