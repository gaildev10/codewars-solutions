//If you can't sleep, just count sheep!!

let countSheep = function (num){
    let sheepCount = []
    for(let i=1; i<=num; i++){
      let count = `${i} sheep...`
        sheepCount.push(count)
      }
      return sheepCount.join("")
    }


    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});
