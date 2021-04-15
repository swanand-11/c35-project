var ball;
var dbase;
var pos;

function setup(){
    dbase = firebase.database();
    createCanvas(500,500);
    ball = createSprite(100,100,10,10);
    ball.shapeColor = "red";
    var ballpos = dbase.ref("ball/position");
    ballpos.on("value",readPosition)
}

function draw(){
    background("white");
    if (pos!==undefined)  {

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    dbase.ref("ball/position").set({
        "x":pos.x + X,
        "y":pos.y + Y,
    })
}
function readPosition(data)  {
    pos = data.val();
    ball.x = pos.x
    ball.y = pos.y
}
