class Player {
    constructor(imgLeft, imgRight) {
        this.x = width / 2;
        this.y = height - 170;
        this.velocityX = 0;
        this.velocityY = 5;
        this.speedY = 0
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isNotMoving = true;
        this.isJumping = false;
        this.isNotJumping = true;
        this.imgLeft = imgLeft;
        this.imgRight = imgRight;

    }
    update() {
        if (this.isMovingRight) {
            this.velocityX += 0.5
        }
        if (this.isMovingLeft) {
            this.velocityX -= 0.5;
        }
        if (this.isJumping) {
            this.velocityY -= 30
            this.isJumping = false;
        }
        // gravity
        this.velocityY += 1.5;
        // slide
        this.y += this.velocityY;
        this.velocityY *= 0.9;
        this.x += this.velocityX;
        this.velocityX *= 0.9;
    }
    moveLeft() {
        this.isMovingRight = false;
        this.isMovingLeft = true;
        this.isNotMoving = false;
    }
    moveRight() {
        this.isMovingLeft = false;
        this.isMovingRight = true;
        this.isNotMoving = false;
    }
    moveNowhere() {
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.isNotMoving = true;
    }
    jumpUp() {
        this.isJumping = true;
    }
    fallDown() {
        this.isJumping = false;
    }
    draw() {
        if (this.isMovingRight) {
        image(this.imgRight, this.x, this.y)
        }
        else if (this.isMovingLeft) {
            image(this.imgLeft, this.x, this.y)
        }
        else {
            image(this.imgRight, this.x, this.y)
        }
        if (this.y >= height - 170 && shop === false) {
            this.y = height - 170
            this.velocityY = 0;
        }
        else if (this.y >= platform.y - 60 && abs(this.x - platform.x - 45) <= 55 && this.y <= platform.y) {
            this.y = platform.y - 60
            this.velocityY = 0;
        }
        else if (shop === true && this.y >= height - 80) {
            this.y = height - 80;
            this.velocityY = 0;

        }
    }
}