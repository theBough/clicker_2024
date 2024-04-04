function Square(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col
  
  this.display = function(){
    push()
    fill(this.col)
    rect(this.x, this.y, this.w, this.h)
    pop()
  }
  this.isClicked = function(){
    if(mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y && 
      mouseY < this.y + this.h &&
      mouseIsPressed){
      this.x = Math.floor(Math.random()*390)
      this.y = Math.floor(Math.random()*390)
    }
  }
}
