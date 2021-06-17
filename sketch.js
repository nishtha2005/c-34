const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup (){
    createCanvas(1500,600);
    engine=Engine.create();
    world=engine.world;
    ground = new Ground(750,580,1500,30)

    b1=new Box(900,145,75,75)
    b2=new Box(900,145,75,75)
    b3=new Box(900,145,75,75)
    b4=new Box(900,145,75,75)
    b5=new Box(900,145,75,75)
    b6=new Box(900,145,75,75)

    b7=new Box(820,145,75,75)
    b8=new Box(820,145,75,75)
    b9=new Box(820,145,75,75)
    b10=new Box(820,145,75,75)
    b11=new Box(820,145,75,75)
    b12=new Box(820,145,75,75)

    b13=new Box(740,145,75,75)
    b14=new Box(740,145,75,75)
    b15=new Box(740,145,75,75)
    b16=new Box(740,145,75,75)
    b17=new Box(740,145,75,75)
    b18=new Box(740,145,75,75)

    ball=new Ball(200,200,75,75)
    rope=new Rope(ball.body,{x:550,y:50})

}
function draw(){
    background(180);
    Engine.update(engine);

    ground.display();
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()

    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();

    ball.display();
    rope.display();
    
}
function mouseDragged(){
    
   
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }

