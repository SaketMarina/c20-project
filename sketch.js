var cat, mouse;

var bgImg, catImg1, catImg2, catImg4, mouseImg1, mouseImg2, mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(880, 670, 50, 50);
    cat.scale = 0.17;
    cat.addAnimation("catImg1", catImg1);
    cat.addAnimation("catImg4", catImg4);
    cat.addAnimation("catImg2", catImg2);

    mouse = createSprite(150, 670, 50, 50);
    mouse.scale = 0.15;
    mouse.addAnimation("mouseImg1", mouseImg1);
    mouse.addAnimation("mouseImg4", mouseImg4);
    mouse.addAnimation("mouseImg2", mouseImg2);
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();

    if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.changeAnimation("catImg4");
        mouse.changeAnimation("mouseImg4");
        cat.x = mouse.x + 100;
        cat.velocityX = 0;
    }   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW) {
        mouse.changeAnimation("mouseImg2");
        cat.changeAnimation("catImg2");    
        cat.velocityX = -4;
    }
}
