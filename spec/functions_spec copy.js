import { hello } from '../functions.js'

describe("A suite of tests for functions.js", function() {
    it('tests for a function named hello that returns "hello"', function() {
      let sHello = hello();
      expect(sHello).toEqual("hello");
    });
  });
  
  