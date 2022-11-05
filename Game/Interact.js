class Door {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
    }
    draw() {
        noFill()
        rect(this.x, this.y, this.width, this.height)
    }
}