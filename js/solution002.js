//opposites attract

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

  console.log(lovefunc(2,2))


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(lovefunc(1,4), true)
//     assert.strictEqual(lovefunc(2,2), false)
//     assert.strictEqual(lovefunc(0,1), true)