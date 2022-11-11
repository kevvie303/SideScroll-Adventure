class Count{
    constructor(s,w){
      this.s = s
      this.w = w
      this.p = createP('')
    }
    start(){
      if (!this.done && this.s <= 0) {
        setInterval(() => this.counter(), this.w)
      }
    }
    counter(){
      if(this.s < 100 && chopping === true){
        this.s ++
      }
    }
    stop(){
      this.s += 0
    }
  }