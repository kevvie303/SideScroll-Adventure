class Platform {
    constructor() {
        this.x = 400
        this.y = 300
    }
    draw() {
        fill(0)
        rect(this.x, this.y, 100, 20)
    }
}