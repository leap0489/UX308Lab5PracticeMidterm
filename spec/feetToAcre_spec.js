import { feetToAcre } from "../feetToAcre.js";

describe("A suite of tests for functions.js", function() {
    it('tests for 10000 feet', function() {
      let Acre = feetToAcre(10000);
      expect(Acre.toFixed(2)).toEqual("0.23");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests for 30000 feet', function() {
      let Acre = feetToAcre(30000);
      expect(Acre.toFixed(2)).toEqual("0.69");
    });
  });  

  describe("A suite of tests for functions.js", function() {
    it('tests for 30000 feet', function() {
      let Acre = feetToAcre(6800);
      expect(Acre.toFixed(2)).toEqual("0.16");
    });
  });  