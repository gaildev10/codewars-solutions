//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  
    const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
    
    return average > yourPoints ? false : true
  }


  const chai = require('chai');
const assert = chai.assert;

describe("Basic Tests", function() {
  it("betterThanAverage([2, 3], 5) should return True", function() {
    assert.strictEqual(betterThanAverage([2, 3], 5), true);
  });
  
  it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
    assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
  });
  
  it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return True", function() {
    assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), true);
  });
  
  it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
    assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
  });
  
  it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
    assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
  });
});

describe("Random Tests", function() {
  function solution(classPoints, yourPoints) {
    return classPoints.reduce((acc, points) => acc + points - yourPoints, 0) < 0;
  }
  
  for (let i = 0; i < 40; ++i) {
    let arr = Array.from({length: 50},() => ~~(Math.random() * 100));
    let points = ~~(Math.random() * 100);
    let result = solution(arr, points);
    it(`betterThanAverage(${arr}, ${points}) should return False`, function() {
      assert.strictEqual(betterThanAverage(arr.slice(), points), result, `Failed for ${arr}`);
    });
  }
});