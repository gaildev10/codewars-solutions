//Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / normPrice / discount * 100)
  }


  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);
    assert.strictEqual(dutyFree(1400, 35, 10000), 20);
    assert.strictEqual(dutyFree(700, 26, 7000), 38);
  });
})