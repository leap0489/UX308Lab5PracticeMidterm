import { airToDescription } from "../airQuality.js";

describe("A suite of tests for functions.js", function () {
    it('tests for a AQI of 12"', function () {
        let quality = 12;
        let description = airToDescription(quality);
        expect(description).toEqual("Good");
    });
});

describe("A suite of tests for functions.js", function () {
    it('tests for a AQI of 67"', function () {
        let quality = 67;
        let description = airToDescription(quality);
        expect(description).toEqual("Moderate");
    });
});

describe("A suite of tests for functions.js", function () {
    it('tests for a AQI of 114"', function () {
        let quality = 114;
        let description = airToDescription(quality);
        expect(description).toEqual("Unhealthy for Sensitive Groups");
    });
});

describe("A suite of tests for functions.js", function () {
    it('tests for a AQI of 176"', function () {
        let quality = 176;
        let description = airToDescription(quality);
        expect(description).toEqual("Unhealthy");
    });
});

describe("A suite of tests for functions.js", function () {
    it('tests for a AQI of 230"', function () {
        let quality = 230;
        let description = airToDescription(quality);
        expect(description).toEqual("Very Unhealthy");
    });
});

describe("A suite of tests for functions.js", function () {
    it('tests for a AQI of 230"', function () {
        let quality = 323;
        let description = airToDescription(quality);
        expect(description).toEqual("Hazardous");
    });
});

