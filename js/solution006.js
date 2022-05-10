//swap values

swapValues = (args) => args.reverse()



describe("Tests", () => {
    it("test", () => {
  var arr = [1,2] 
  swapValues(arr);
  Test.assertEquals(arr[0], 2, "Failed swapping numbers")
  Test.assertEquals(arr[1], 1, "Failed swapping numbers")
  
  arr = ["a","b"] 
  swapValues(arr);
  Test.assertEquals(arr[0], "b", "Failed swapping strings")
  Test.assertEquals(arr[1], "a", "Failed swapping strings")
  
  arr = [["1"],[2]] 
  swapValues(arr);
  Test.assertEquals(arr[0][0], 2, "Failed swapping arrays")
  Test.assertEquals(arr[1][0], "1", "Failed swapping arrays")
    });
  });