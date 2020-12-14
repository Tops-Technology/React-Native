function multiplyBy(num1) {
    return function(num2) {
      return num1 * num2;
    }
  }
  
  var multiplyByTwo = multiplyBy(2);
  
  var arr = [ 1, 2, 3 ];
  
  var arrDoubled = arr.map(multiplyByTwo);
  
  console.log(arrDoubled); // [ 2, 4, 6 ]