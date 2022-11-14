class Count{
    constructor(s, w){
      this.s = s
      this.w = w
      this.p = createP('')
    }
    start(){
      if (this.s <= 0) {
        setInterval(() => this.counter(), this.w)
      }
    }
    counter(){
      if(this.s < 100 && chopping === true){
        this.s ++
      }
    }
  }

  class MiningCount{
    constructor(m, w){
      this.w = w
      this.m = m
      this.p = createP('')
    }
    start(){
      if (this.m <= 0) {
        setInterval(() => this.counter(), this.w)
      }
    }
    counter(){
      if(this.m < 100 && mining === true){
        this.m ++
      }
    }
  }