let player;
let shopDoor;
let platform;
let shop = false;
let forest = false;
let town = true;
let chopping = false;
let choppingImg;
let shopBg;
let forestBg;
let exitDoorShop;
// 0 is completely transparent.
let fade = false;
let fadeBg = 1;
let fadeBgAmount = 4;
let blackCanvas;
let townBg;
var woodcutLvl = 0;
let woodcutProgress;
let imgRight;
let imgLeft;
let font;
let woodcutLvlUpImg;
let woodcutLvlUpY = 500
let woodcutLvlUp = false
function preload() {
    shopBg = loadImage("images/shop.gif")
    imgRight = loadImage("images/player_Right.gif")
    imgLeft = loadImage("images/player_Left.gif")
    townBg = loadImage("images/mainmapke.png")
    blackCanvas = loadImage("images/black_intro_screen.png")
    forestBg = loadImage("images/forest.png")
    choppingImg = loadImage("images/chopping.gif")
    font = loadFont("fonts/Caveat-Regular.ttf")
    woodcutLvlUpImg = loadImage("images/woodcutLvlUp.png")
}
function setup() {
    createCanvas(1200, 600);
    player = new Player(imgLeft, imgRight)
    shopDoor = new Door(x = 510, y = height - 150, w = 50, h = 50);
    exitDoorShop = new Door(x = 90, y = width - 180, w = 140, h = 160)
    platform = new Platform();
    woodcutProgress = new Count(0, 100);
}

function draw() {
    if (shop === false && town === true) {
        if (fade === true) {
            tint(255, fadeBg);
            background(blackCanvas);
            fadeBg += fadeBgAmount;
            if (fadeBg >= 255) {
                fade = false;
            }
            }
            else if (fade === false) {
                noTint();
                background(townBg);
                tint(255, fadeBg);
                image(blackCanvas, 0, 0, width * 2, height * 2);
                fadeBg -= fadeBgAmount;
                shopDoor.draw();
                platform.draw();
            }
        if (player.x <= 0) {
            town = false
            forest = true
            player.x = 1199
        }
    }
    if (town === false && forest === true) {
        background(forestBg);
        if (player.x >= 406 && player.x <= 884 && keyIsDown(87)) {
            chopping = true;
        }
        if (player.x <= 406 && player.x >= 884 && keyIsDown(87)) {
            chopping = false;
        }
        if (player.x >= 1200) {
            town = true;
            forest = false;
            player.x = 1;
        }
        if (chopping === true) {
            image(choppingImg, player.x - 30, player.y - 53)
            let middle = 550;
            let sVal = woodcutProgress.s;
            let Progress = map(sVal, 0, 100, 0, 60);
            
            fill(225, 255, 128);
            textSize(32);
            textFont(font)
            text('Woodcutting progress : '+ sVal + '%', width / 2 - 100, middle + 15);
            
            rect(player.x, player.y + 60, Progress, 20, 15)
            stroke(128, 179, 80)
            noFill();
            rect(player.x, player.y + 60, 60, 20, 15)
            if (sVal === 100) {
                woodcutProgress.s = 0;
                woodcutLvl += 1;
                woodcutLvlUp = true
                print(woodcutLvlUp)
            }
        }
        if (woodcutLvlUp === true) {
            image(woodcutLvlUpImg, player.x, woodcutLvlUpY)
            woodcutLvlUpY --
            if (woodcutLvlUpY <= 400) {
                woodcutLvlUpY = 500
                woodcutLvlUp = false;
            }
        }
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
        background(blackCanvas);
        fadeBg += fadeBgAmount;
        if (fadeBg >= 255) {
            fade = false;
        }
        }
        else if (fade === false) {
            noTint();
            background(shopBg);
            tint(255, fadeBg);
            image(blackCanvas, 0, 0, width * 2, height * 2);
            fadeBg -= fadeBgAmount;
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
    if (keyCode === 87 && chopping === true) {
        chopping = false;
        woodcutProgress.stop();
    }
}
function keyPressed() {
    if (keyCode === 32) {
    player.jumpUp();
    }
    if (abs(player.x - shopDoor.x) < 25 && keyCode === 87 && shop === false && town === true) {
        shop = true;
        fade = true;
        fadeBg = 0;
    }
    if (abs(player.x - exitDoorShop.x) < 110 && keyCode === 87 && shop === true) {
        shop = false;
        fade = true;
        fadeBg = 0;
    }
    if (player.x >= 406 && player.x <= 884 && forest === true && keyCode === 87 && chopping === false) {
        chopping = true
        woodcutProgress.start();
    }
}
