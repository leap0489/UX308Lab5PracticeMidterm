import { airToDescription } from "../airQuality.js";

describe("A suite of tests for functions.js", function() {
    it('tests for a AQI of 75"', function() {
      let quality = 75;
      let description = airToDescription(quality);
      expect(description).toEqual("Moderate");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests for a AQI of 341"', function() {
      let quality = 341;
      let description = airToDescription(quality);
      expect(description).toEqual("Hazardous");
    });
  });

  describe("A suite of tests for functions.js", function() {
    it('tests for a AQI of 12"', function() {
      let quality = 12;
      let description = airToDescription(quality);
      expect(description).toEqual("Good");
    });
  });