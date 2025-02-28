import { slope } from "../slope.js";

describe("A suite of tests for functions.js", function() {
    it('tests for these coordinates', function() {
        let x1 = 2;
        let y1 = 3;
        let x2 = 6;
        let y2 = 8;
        let slp = slope(x1, y1, x2, y2);
      expect(slp.toFixed(2)).toEqual("1.25");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests for these coordinates', function() {
        let x1 = 2;
        let y1 = 5;
        let x2 = 8;
        let y2 = 10;
        let slp = slope(x1, y1, x2, y2);
      expect(slp.toFixed(2)).toEqual("0.83");
    });
  });
  
  describe("A suite of tests for functions.js", function() {
    it('tests for these coordinates', function() {
        let x1 = 12;
        let y1 = 17;
        let x2 = 25;
        let y2 = 37;
        let slp = slope(x1, y1, x2, y2);
      expect(slp.toFixed(2)).toEqual("1.54");
    });
  });
