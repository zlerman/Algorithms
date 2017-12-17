var assert = require('assert');
const func = require("../generate-all-permutations-of-input-string/index.js");
describe('Generate permutations', function() {
  it('should return a just a single string', function() {
      var simpleString = "a";
      assert.equal(func.generate(a), "a");
  });
  it('should return the correct permutations', function() {
      var simpleString = "abc";
      var permutationArray = ["abc", "acb", "cba", "cab", "bac", "bca"];
      var result = func.generate(simpleString);
      assert.notEqual(-1,permutation. 
  });
});

