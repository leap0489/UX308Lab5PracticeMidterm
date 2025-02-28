import { lawnTime } from "../lawn.js";

describe("A suite of tests for functions.js", function() {
    it('tests for a lawn of 40 square feet', function() {
      let width = 8;
      let length = 8;
      let rate = 4;
      let time = lawnTime(width, length, rate)
      expect(time.toFixed(2)).toEqual("16.00");
    });
  });


describe("A suite of tests for functions.js", function() {
    it('tests for a lawn of 40 square feet', function() {
      let width = 4;
      let length = 5;
      let rate = 3;
      let time = lawnTime(width, length, rate)
      expect(time.toFixed(2)).toEqual("6.67");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests for a lawn of 40 square feet', function() {
      let width = 7;
      let length = 6;
      let rate = 5;
      let time = lawnTime(width, length, rate)
      expect(time.toFixed(2)).toEqual("8.40");
    });
  });