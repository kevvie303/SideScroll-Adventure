class Player {
    constructor(imgLeft, imgRight, minecartLeft, minecartRight) {
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
        this.minecartLeft = minecartLeft;
        this.minecartRight = minecartRight;
        // 0 is left, 1 is right
        this.facingDirection = 0

    }
    update() {
        if (this.isMovingRight) {
            if (minecart === false) {
            this.velocityX += 0.5
            }
            else if (minecart === true) {
                this.velocityX += 0.75
            }
        }
        if (this.isMovingLeft) {
            if (minecart === false) {
            this.velocityX -= 0.5;
            }
            else if (minecart === true) {
                this.velocityX -= 0.75
            }
        }
        if (this.isJumping) {
            this.velocityY -= 30
            this.isJumping = false;
        }
        if (this.x <= 406 || this.x >= 884) {
            chopping = false;
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
        if (minecart === false) {
            if (this.isMovingRight) {
                image(this.imgRight, this.x, this.y)
                this.facingDirection = 1
            }
            else if (this.isMovingLeft) {
                image(this.imgLeft, this.x, this.y)
                this.facingDirection = 0
            }
            else if (this.facingDirection === 1) {
                image(this.imgRight, this.x, this.y)
            }
            else if (this.facingDirection === 0) {
                image(this.imgLeft, this.x, this.y)
            }
        }
        else if (minecart === true) {
            if (this.isMovingRight) {
                image(this.minecartRight, this.x, this.y)
                this.facingDirection = 1
            }
            else if (this.isMovingLeft) {
                image(this.minecartLeft, this.x, this.y)
                this.facingDirection = 0
            }
            else if (this.facingDirection === 1) {
                image(this.minecartRight, this.x, this.y)
            }
            else if (this.facingDirection === 0) {
                image(this.minecartLeft, this.x, this.y)
            }
        }
        if (this.y >= height - 170 && shop === false && minecart === false) {
            this.y = height - 170
            this.velocityY = 0;
        }
        if (this.y >= height - 180 && minecart === true) {
            this.y = height - 180
            this.velocityY = 0;
        }
        // This fixes the platform collision, so the player doesn't fall through it. Unless they press w
        else if (this.y >= platform.y - 60 && abs((this.x + 30) - platform.x - 50) <= 75 && this.y <= platform.y - 40 && shop === false &! keyIsDown(83)) {
            this.y = platform.y - 60
            this.velocityY = 0;
        }
        else if (shop === true && this.y >= height - 80) {
            this.y = height - 80;
            this.velocityY = 0;

        }
    }
}