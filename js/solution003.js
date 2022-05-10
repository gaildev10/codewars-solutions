//Hello, name or world
function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
      return `Hello, World!`;
    } else {
      return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
  }


  const assert = require('chai').assert;
describe("Fixed Tests", () => {
  it("should work for fixed inputs", () => {
    let actualJohn = hello('johN');
    assert.isDefined(actualJohn, "You have to return a string instead of logging it to the console");
    assert.strictEqual(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    assert.strictEqual(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
    assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
    assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
  });
});
  