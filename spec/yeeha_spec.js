import { Yeeha } from "../yeeha.js";

describe("A suite of tests for functions.js", function() {
    it('tests 6', function() {
      let integer = 6;
      let response = Yeeha(integer)
      expect(response).toEqual("Yee");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests 14', function() {
      let integer = 14;
      let response = Yeeha(integer)
      expect(response).toEqual("Ha");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests 21', function() {
      let integer = 21;
      let response = Yeeha(integer)
      expect(response).toEqual("Yee Ha");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests 26', function() {
      let integer = 26;
      let response = Yeeha(integer)
      expect(response).toEqual("Nada");
    });
  });
