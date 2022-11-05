let player;
let shopDoor;
let platform;
let shop = false;
let shopBg;
let exitDoorShop;

let townBg;

let imgRight;
let imgLeft;
function preload() {
    shopBg = loadImage("images/shop.gif")
    imgRight = loadImage("images/player_Right.gif")
    imgLeft = loadImage("images/player_Left.gif")
    townBg = loadImage("images/mainmapke.png")
}
function setup() {
    createCanvas(1200, 600);
    player = new Player(imgLeft, imgRight)
    shopDoor = new Door(x = 510, y = height - 150, w = 50, h = 50);
    exitDoorShop = new Door(x = 90, y = width - 180, w = 140, h = 160)
    platform = new Platform();

}

function draw() {
    if (shop === false) {
    background(townBg);
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
    if (abs(player.x - exitDoorShop.x) < 110 && keyIsDown(87) && shop === true) {
        shop = false;
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