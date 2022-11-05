let player;
let shopDoor;
let platform;
let shop = false;
let shopBg;
let imgRight;
let imgLeft;
function preload() {
    shopBg = loadImage("images/shop.png")
    imgRight = loadImage("images/player_Right.gif")
    imgLeft = loadImage("images/player_Left.gif")
}
function setup() {
    createCanvas(1200, 600);
    player = new Player(imgLeft, imgRight)
    shopDoor = new Door();
    platform = new Platform();
}

function draw() {
    if (shop === false) {
    background(0);
    shopDoor.draw();
    platform.draw();
    }
    if (keyIsDown(68) || keyIsDown(39)){
        player.moveRight();
    }
    if (keyIsDown(65) || keyIsDown(37)){
        player.moveLeft();
    }
    if (abs(player.x - shopDoor.x) < 25 && keyIsDown(87) && shop === false) {
        shop = true;
    }
    if (shop === true) {
        background(shopBg)
    }
    player.update();
    player.draw();

}
function keyReleased() {
    if (keyCode != 32) {
    player.moveNowhere();
    }
}
function keyPressed() {
    if (keyCode === 32)
    player.jumpUp();
}