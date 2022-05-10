function removeEveryOther(arr){
    return arr.filter((_, index) => index % 2 == 0)
  }



const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
  })
});

describe("Random tests",() =>{
  
  const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
  
  const sol=arr=>arr.filter((a,i)=>!(i%2));
  
  let base="abcdefghijklmnopqrstuvwxyz0123456789";

  it("Testing for 40 random tests", () => {
    for (let i=0;i<40;i++){
      let arr=Array.from({length:randint(1,36)},a=>base[randint(0,base.length-1)]);
      assert.deepEqual(removeEveryOther(arr.slice()), sol(arr.slice()),`Testing for ${JSON.stringify(arr)}`);
    }
  });
})