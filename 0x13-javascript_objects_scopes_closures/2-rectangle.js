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
}

