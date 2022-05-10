//Basic Mathematical operation


function basicOp(operation, value1, value2)
{
  // Code
  if(operation == '+') return value1 + value2;
  if(operation == '-') return value1 - value2;
  if(operation == '/') return value1 / value2;
  if(operation == '*') return value1 * value2;

}

console.log(basicOp("+", 4, 7))