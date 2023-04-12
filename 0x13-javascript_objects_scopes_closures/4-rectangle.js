#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {
      // return an empty object if width or height is zero or negative
      return {};
    }
    this.width = w;
    this.height = h;
  }
  
  print() {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }
  
  rotate() {
    // exchange width and height of the rectangle
    [this.width, this.height] = [this.height, this.width];
  }
  
  double() {
    // multiply width and height of the rectangle by 2
    this.width *= 2;
    this.height *= 2;
  }
}

