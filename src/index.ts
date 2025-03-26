import StringCalculator from "./StringCalculator";

const calculator = new StringCalculator();
console.log(calculator.add("")); // Should print 0
console.log(calculator.add("5")); // Should print 5
console.log(calculator.add("1,2,3")); // Should print 6
console.log(calculator.add("//;10;20;40")); // Should print 70
console.log(calculator.add("//:10:30:50")); // Should print 90
console.log(calculator.add("-10,20,30")); // Should throw error negative numbers not allowed -10
