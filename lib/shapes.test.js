// import {Circle, Square, Triangle} from "./shapes"
const {Circle, Square, Triangle} = require("./shapes")

// test for the circle shape
describe('Circle', () => {
    test('Test passes', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
  });
  // test for the square shape
  describe('Square', () => {
      test('Test passes', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
      });
    });
  // test for the triangle shape
  describe('Triangle', () => {
      test('Test passes', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
      });
    });
    