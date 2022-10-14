const assert = require('assert')
const {getColourish, createMatrix} = require('../src/patterns/patterns.js')
const {describe} = require("mocha/lib/cli/run");

describe("getColourish", function () {
    describe("getColourish", function () {
        it("should be whiteish when all colours are of high values", function () {
            assert.equal(getColourish([255, 255, 255]), "whiteish");
            assert.equal(getColourish([255, 255, 254]), "whiteish");
            assert.equal(getColourish([255, 254, 255]), "whiteish");
            assert.equal(getColourish([255, 254, 254]), "whiteish");
            assert.equal(getColourish([254, 255, 255]), "whiteish");
            assert.equal(getColourish([254, 255, 254]), "whiteish");
            assert.equal(getColourish([254, 254, 255]), "whiteish");
            assert.equal(getColourish([254, 254, 254]), "whiteish");
            assert.equal(getColourish([254, 254, 254]), "whiteish");
        });
        it("should be redish when red is overwhelmingly present", function () {
            assert.equal(getColourish([255, 0, 0]), "redish");
            assert.equal(getColourish([255, 100, 0]), "redish");
            assert.equal(getColourish([255, 178, 0]), "redish");
            assert.notEqual(getColourish([255, 179, 0]), "redish");
            assert.equal(getColourish([255, 100, 100]), "redish");
            assert.equal(getColourish([2, 0, 0]), "redish");
            assert.notEqual(getColourish([2, 2, 0]), "redish");
            assert.notEqual(getColourish([2, 0, 2]), "redish");
            assert.notEqual(getColourish([0, 2, 0]), "redish");
            assert.notEqual(getColourish([255, 255, 0]), "redish");
            assert.notEqual(getColourish([255, 0, 255]), "redish");
            assert.notEqual(getColourish([0, 255, 0]), "redish");
            assert.notEqual(getColourish([0, 0, 255]), "redish");
        });
        it("should be greenish when green is overwhelmingly present", function () {
            assert.equal(getColourish([0, 255, 0]), "greenish");
            assert.equal(getColourish([0, 255, 100]), "greenish");
            assert.equal(getColourish([0, 255, 178]), "greenish");
            assert.notEqual(getColourish([0, 255, 179]), "greenish");
            assert.equal(getColourish([100, 255, 100]), "greenish");
            assert.equal(getColourish([0, 2, 0]), "greenish");
            assert.notEqual(getColourish([0, 2, 2]), "greenish");
            assert.notEqual(getColourish([2, 2, 0]), "greenish");
            assert.notEqual(getColourish([0, 0, 2]), "greenish");
            assert.notEqual(getColourish([255, 255, 0]), "greenish");
            assert.notEqual(getColourish([0, 255, 255]), "greenish");
            assert.notEqual(getColourish([255, 0, 0]), "greenish");
            assert.notEqual(getColourish([0, 0, 255]), "greenish");
        });
        it("should be blueish when blue is overwhelmingly present", function () {
            assert.equal(getColourish([0, 0, 255]), "blueish");
            assert.equal(getColourish([0, 100, 255]), "blueish");
            assert.equal(getColourish([0, 178, 255]), "blueish");
            assert.notEqual(getColourish([0, 179, 255]), "blueish");
            assert.equal(getColourish([100, 100, 255]), "blueish");
            assert.equal(getColourish([0, 0, 2]), "blueish");
            assert.notEqual(getColourish([0, 2, 2]), "blueish");
            assert.notEqual(getColourish([2, 2, 0]), "blueish");
            assert.notEqual(getColourish([0, 2, 0]), "blueish");
            assert.notEqual(getColourish([255, 255, 0]), "blueish");
            assert.notEqual(getColourish([0, 255, 255]), "blueish");
            assert.notEqual(getColourish([255, 0, 0]), "blueish");
            assert.notEqual(getColourish([0, 255, 0]), "blueish");
        });
        it("should be yellowish when red and green are both overwhelmingly present", function () {
            assert.equal(getColourish([255, 255, 0]), "yellowish");
            assert.equal(getColourish([255, 255, 100]), "yellowish");
            assert.equal(getColourish([255, 255, 178]), "yellowish");
            assert.notEqual(getColourish([255, 255, 179]), "yellowish");
            assert.equal(getColourish([255, 200, 100]), "yellowish");
            assert.equal(getColourish([2, 2, 0]), "yellowish");
            assert.notEqual(getColourish([2, 2, 2]), "yellowish");
            assert.notEqual(getColourish([2, 0, 2]), "yellowish");
            assert.notEqual(getColourish([0, 2, 2]), "yellowish");
            assert.notEqual(getColourish([255, 0, 0]), "yellowish");
            assert.notEqual(getColourish([0, 255, 0]), "yellowish");
            assert.notEqual(getColourish([0, 0, 255]), "yellowish");
        });
        it("should be magentaish when red and blue are both overwhelmingly present", function () {
            assert.equal(getColourish([255, 0, 255]), "magentaish");
            assert.equal(getColourish([255, 100, 255]), "magentaish");
            assert.equal(getColourish([255, 178, 255]), "magentaish");
            assert.notEqual(getColourish([255, 179, 255]), "magentaish");
            assert.equal(getColourish([255, 100, 200]), "magentaish");
            assert.equal(getColourish([2, 0, 2]), "magentaish");
            assert.notEqual(getColourish([2, 2, 2]), "magentaish");
            assert.notEqual(getColourish([2, 2, 0]), "magentaish");
            assert.notEqual(getColourish([0, 2, 2]), "magentaish");
            assert.notEqual(getColourish([255, 0, 0]), "magentaish");
            assert.notEqual(getColourish([0, 255, 0]), "magentaish");
            assert.notEqual(getColourish([0, 0, 255]), "magentaish");
        });
        it("should be cyanish when green and blue are both overwhelmingly present", function () {
            assert.equal(getColourish([0, 255, 255]), "cyanish");
            assert.equal(getColourish([100, 255, 255]), "cyanish");
            assert.equal(getColourish([178, 255, 255]), "cyanish");
            assert.notEqual(getColourish([179, 255, 255]), "cyanish");
            assert.equal(getColourish([100, 255, 200]), "cyanish");
            assert.equal(getColourish([0, 2, 2]), "cyanish");
            assert.notEqual(getColourish([2, 2, 2]), "cyanish");
            assert.notEqual(getColourish([2, 2, 0]), "cyanish");
            assert.notEqual(getColourish([0, 2, 0]), "cyanish");
            assert.notEqual(getColourish([255, 0, 0]), "cyanish");
            assert.notEqual(getColourish([0, 255, 0]), "cyanish");
            assert.notEqual(getColourish([0, 0, 255]), "cyanish");
        });
    });
});
