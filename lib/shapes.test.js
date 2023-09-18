// import {Circle, Square, Triangle} from "./shapes"
const {Circle, Square, Triangle} = require("./shapes")

// test for the circle shape
describe('Circle', () => {
    test('Test passes', () => {
      const circle = new Circle();
      var color =('black')
      circle.setColor(color);
      expect(circle.render()).toEqual(`<circle cx="50%" cy="50%" r="150" height="100%" width="100%" fill="${color}">`);
    });
  });
  // test for the square shape
  describe('Square', () => {
      test('Test passes', () => {
        const square = new Square();
        var color =('red')
        square.setColor(color);
        expect(square.render()).toEqual(`<rect x="50" height="100%" width="100%" fill="${color}">`);
      });
    });
  // test for the triangle shape
  describe('Triangle', () => {
      test('Test passes', () => {
        const triangle = new Triangle();
        var color =('green')
        triangle.setColor(color);
        expect(triangle.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
      });
    });
    