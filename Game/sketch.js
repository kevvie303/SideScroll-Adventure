let player;
let shopDoor;
let platform;
let shop = false;
let shopBg;
let exitDoorShop;
// 0 is completely transparent.
let fade = false;
let fadeBg = 1;
let fadeBgAmount = 4;
let blackCanvas;
let townBg;

let imgRight;
let imgLeft;
function preload() {
    shopBg = loadImage("images/shop.gif")
    imgRight = loadImage("images/player_Right.gif")
    imgLeft = loadImage("images/player_Left.gif")
    townBg = loadImage("images/mainmapke.png")
    blackCanvas = loadImage("images/black_intro_screen.png")
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
    if (shop === true) {
        if (fade === true) {
        tint(255, fadeBg);
        background(blackCanvas)
        fadeBg += fadeBgAmount
        if (fadeBg >= 255) {
            fade = false;
        }
        }
        else if (fade === false) {
            noTint()
            background(shopBg)
            tint(255, fadeBg);
            image(blackCanvas, 0, 0, width * 2, height * 2);
            fadeBg -= fadeBgAmount
        }

    }
    noTint()
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
    if (abs(player.x - shopDoor.x) < 25 && keyCode === 87 && shop === false) {
        shop = true;
        fade = true;
    }
    if (abs(player.x - exitDoorShop.x) < 110 && keyCode === 87 && shop === true) {
        shop = false;
    }
}